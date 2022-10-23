package io.dubconnects.dubconnects;
import java.util.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import java.io.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.*;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmailManager {
    
    @Autowired
    private JavaMailSender mailSender;
 
    // should check on front end if the email ends with @uw.edu 
    @GetMapping("/verify/{email}")
    public void verifyEmail(@PathVariable String email) throws MessagingException, UnsupportedEncodingException {
        System.out.println("recieved: " + email);
        sendVerificationEmail(email);
       
    }
    
    // call sendVerificationEmail when the email submit button is pressed
    // change User to String email passed in by frontend textbox
    public void sendVerificationEmail(String email)
        throws MessagingException, UnsupportedEncodingException {
        String toAddress = email;
        String fromAddress = "dubconnects.noreply@gmail.com";
        String senderName = "DubConnects";
        String subject = "Please verify your email";
        String randomCode = Integer.toString((int)Math.floor(Math.random()*(1000000 -100000) + 100000));
        // if extra time, try to figure out how to send link
        String content = "Verification Code: " + randomCode;
        
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        
        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);
        
        
        //String verifyURL = siteURL + "/verify?code=" + randomCode;
        
        //content = content.replace("[[URL]]", verifyURL);
        
        helper.setText(content, true);
        

        mailSender.send(message);   
    }

   
         
}