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

    public TwilioCredentialsManager() throws FileNotFoundException{
        Scanner twilioCredentialsScanner = new Scanner(new File(System.getProperty("user.dir") +
                "\\src\\main\\java\\io\\dubconnects\\dubconnects\\" + "TwilioCredentials.txt"));
        ACCOUNT_SID = twilioCredentialsScanner.nextLine();
        AUTH_TOKEN = twilioCredentialsScanner.nextLine();
        KEY_SID = twilioCredentialsScanner.nextLine();
        KEY_SECRET = twilioCredentialsScanner.nextLine();

        twilioCredentialsScanner.close();

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
