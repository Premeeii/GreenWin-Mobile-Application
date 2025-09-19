package dev.kittpas.greenwin.dto;

public class FindPersonRequest {
    
    private String username;
    
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    public FindPersonRequest(String username) {
        this.username = username;
    }


    
}
