package io.dubconnects.dubconnects;

import java.util.*;
import java.io.*;

import com.twilio.Twilio;
import org.springframework.stereotype.Component;

@Component
public class TwilioCredentialsManager {
    private static String ACCOUNT_SID;
    private static String AUTH_TOKEN;
    private static String KEY_SID;
    private static String KEY_SECRET;

    public TwilioCredentialsManager() throws IOException {
        InputStream in = getClass().getResourceAsStream("/TwilioCredentials.txt");
        BufferedReader br = new BufferedReader(new InputStreamReader(in));

        ACCOUNT_SID = br.readLine();
        AUTH_TOKEN = br.readLine();
        KEY_SID = br.readLine();
        KEY_SECRET = br.readLine();

        br.close();

        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }

    public String getAccountSid(){
        return ACCOUNT_SID;
    }
    public String getAuthToken(){
        return AUTH_TOKEN;
    }
    public String getKeySid(){
        return KEY_SID;
    }
    public String getKeySecret(){
        return KEY_SECRET;
    }
}
