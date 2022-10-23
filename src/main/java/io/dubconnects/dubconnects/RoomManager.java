package io.dubconnects.dubconnects;

import java.util.*;
import java.io.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.twilio.Twilio;
import com.twilio.jwt.accesstoken.AccessToken;
import com.twilio.jwt.accesstoken.VideoGrant;

@RestController
public class RoomManager {

    @Autowired
    private TwilioCredentialsManager credentials;

    public RoomManager() {

    }

    @GetMapping(path = "/rooms/{user}", produces = "application/json")
    public String joinRoom(@PathVariable String user) {
        VideoGrant grant = new VideoGrant().setRoom("placeholder");
        AccessToken token = new AccessToken.Builder(
                credentials.getAccountSid(),
                credentials.getKeySid(),
                credentials.getKeySecret()
        ).identity(user).grant(grant).build();

        return token.toJwt();
    }

}
