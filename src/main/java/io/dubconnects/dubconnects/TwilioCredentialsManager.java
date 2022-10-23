package io.dubconnects.dubconnects;

import java.util.*;
import java.io.*;

import org.springframework.stereotype.Component;

@Component
public class TwilioCredentialsManager {
    private static String ACCOUNT_SID;
    private static String AUTH_TOKEN;
    public TwilioCredentialsManager() throws FileNotFoundException{
        Scanner twilioCredentialsScanner = new Scanner(new File(System.getProperty("user.dir") +
                "\\src\\main\\java\\io\\dubconnects\\dubconnects\\" + "TwilioCredentials.txt"));
        ACCOUNT_SID = twilioCredentialsScanner.nextLine();
        AUTH_TOKEN = twilioCredentialsScanner.nextLine();
        twilioCredentialsScanner.close();
    }

    public String getAccountSid(){
        return ACCOUNT_SID;
    }
    public String getAuthToken(){
        return AUTH_TOKEN;
    }

}
