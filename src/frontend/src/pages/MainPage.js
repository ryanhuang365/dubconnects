import React from 'react'
import VideoPlayer from '../components/VideoPlayer'

export default function MainPage() {

  const { connect, createLocalTracks } = require('twilio-video');

  fetch('http://localhost:8080/rooms/join' /*'https://dubconnects.azurewebsites.net/rooms/join'*/, { method: 'GET' })
  .then(response => {
    return response.text();
  }).then(data => {
    joinRoom(data);
  });

  async function joinRoom(token){
    createLocalTracks({
      audio: true,
      video: { width: 640 }
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
    console.log(`local video started`);
    room.localParticipant.videoTracks.forEach(publication => document.getElementById('aaa').appendChild(publication.track.attach()));
    room.localParticipant.audioTracks.forEach(publication => document.getElementById('aaa').appendChild(publication.track.attach()));
  }

  async function startRemoteVideo(room){
    console.log(`remote video started`);
    console.log(room);
    room.participants.forEach(participant => {
      console.log(`Participant "${participant.identity}" is already in room`);
      participant.tracks.forEach(publication => {
        if (publication.track) {
          document.getElementById('aaa').appendChild(publication.track.attach());
        }
      });
    
     participant.on('trackSubscribed', track => {
        document.getElementById('aaa').appendChild(track.attach());
      });
    });
    room.on('participantConnected', participant => {
      console.log(`Participant "${participant.identity}" connected`);
    
      participant.tracks.forEach(publication => {
        if (publication.isSubscribed) {
          const track = publication.track;
          document.getElementById('aaa').appendChild(track.attach());
        }
      });
    
      participant.on('trackSubscribed', track => {
        document.getElementById('aaa').appendChild(track.attach());
      });
    });
  }

  return (
    <VideoPlayer />
  )
}

