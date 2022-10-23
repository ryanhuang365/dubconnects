package io.dubconnects.dubconnects;

import java.util.*;
import java.io.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.twilio.Twilio;
import com.twilio.jwt.accesstoken.AccessToken;
import com.twilio.jwt.accesstoken.VideoGrant;
import com.twilio.rest.video.v1.Room;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RoomManager {

    @Autowired
    private TwilioCredentialsManager credentials;

    private Queue<Room> rooms = new LinkedList<>();

    long rollingRoomId = 0;

    public RoomManager() {

    }

    @GetMapping("/rooms/join")
    public String joinRoom() {
        Room room;
        if(!rooms.isEmpty()){
            room = rooms.poll();
        }else{
            room = Room.creator().setUniqueName("" + rollingRoomId).create();

            rooms.add(room);
            rollingRoomId++;
        }
        VideoGrant grant = new VideoGrant().setRoom(room.getUniqueName());
        AccessToken token = new AccessToken.Builder(
                credentials.getAccountSid(),
                credentials.getKeySid(),
                credentials.getKeySecret()
        ).identity("user").grant(grant).build();

        return token.toJwt();
    }

}
