package dev.kittpas.greenwin.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import jakarta.annotation.PostConstruct;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer{

    @Override
     public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic"); // สำหรับ broadcast
        config.setApplicationDestinationPrefixes("/app"); // endpoint สำหรับ client ส่งข้อมูลเข้า server
    }

     @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws") // endpoint สำหรับเชื่อม
                .setAllowedOriginPatterns("*")
                .withSockJS();
    }
    @PostConstruct
      public void init() {
      System.out.println("WebSocketConfig loaded");
}
    
}

