package com.movietime.MovieTime.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

//    @Autowired
//    private JavaMailSender mailSender;
//    public void sendEmail() {
//        String from = "movietimeztw@gmail.com";
//        SimpleMailMessage message = new SimpleMailMessage();
//
//        message.setFrom(from);
//        message.setTo("oscikj@gmail.com");
//        message.setSubject("MovieTime");
//        message.setText("Hello! Your ticket is here.");
//
//        mailSender.send(message);
//    }
}
