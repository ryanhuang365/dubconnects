package io.dubconnects.dubconnects;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.twilio.jwt.accesstoken.AccessToken;
import com.twilio.jwt.accesstoken.VideoGrant;
import com.twilio.rest.video.v1.Room;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RoomManager {

    @Autowired
    private TwilioCredentialsManager credentials;

    private Queue<Room> rooms = new LinkedList<>();

    Random rand = new Random();

    public RoomManager() {

    }

    @GetMapping("/rooms/join")
    public String joinRoom() {
        Room room;
        if(!rooms.isEmpty()){
            room = rooms.poll();
        }else{
            room = Room.creator().setUniqueName("" + rand.nextInt(1000000000)).create();

            rooms.add(room);
        }
        VideoGrant grant = new VideoGrant().setRoom(room.getUniqueName());
        AccessToken token = new AccessToken.Builder(
                credentials.getAccountSid(),
                credentials.getKeySid(),
                credentials.getKeySecret()
        ).identity("" + rand.nextInt(100000)).grant(grant).build();

        return token.toJwt();
    }

}
