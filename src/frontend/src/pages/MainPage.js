import React from 'react'
import VideoPlayer from '../components/VideoPlayer'

export default function MainPage() {

  const { connect, createLocalTracks } = require('twilio-video');

  fetch(/*'http://localhost:8080/rooms/join'*/ 'https://dubconnects.azurewebsites.net/rooms/join', { method: 'GET' })
  .then(response => {
    return response.text();
  }).then(data => {
    joinRoom(data);
  });

  async function joinRoom(token){
    createLocalTracks({
      audio: true,
      video: { height: window.innerWidth/2, frameRate: 30, width: window.innerWidth/2 }
    }).then(localTracks => {
      return connect(token, {
        tracks: localTracks
      });
    }).then(room => {
      console.log(`Connected to Room: ${room.name}`);
      startLocalVideo(room);
      startRemoteVideo(room);
    });

  }

  async function startLocalVideo(room){
    room.localParticipant.videoTracks.forEach(publication => document.getElementById('left').appendChild(publication.track.attach()));
    room.localParticipant.audioTracks.forEach(publication => document.getElementById('left').appendChild(publication.track.attach()));
  }

  async function startRemoteVideo(room){
    room.participants.forEach(participant => {
      participant.tracks.forEach(publication => {
        if (publication.track) {
          document.getElementById('right').appendChild(publication.track.attach());
        }
      });
    
     participant.on('trackSubscribed', track => {
        document.getElementById('right').appendChild(track.attach());
      });
    });
    room.on('participantConnected', participant => {
      participant.tracks.forEach(publication => {
        if (publication.isSubscribed) {
          document.getElementById('right').appendChild(publication.track.attach());
        }
      });
    
      participant.on('trackSubscribed', track => {
        document.getElementById('right').appendChild(track.attach());
      });
    });
  }

  return (
    <VideoPlayer />
  )
}

