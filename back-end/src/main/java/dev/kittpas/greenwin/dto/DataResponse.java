package dev.kittpas.greenwin.dto;

public class DataResponse {
    private String message;
    private SentLoginDataRequest person;
    private String token;

    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public SentLoginDataRequest getPerson() {
        return person;
    }
    public void setPerson(SentLoginDataRequest person) {
        this.person = person;
    }

    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
    
    public DataResponse(String message, SentLoginDataRequest person, String token) {
        this.message = message;
        this.person = person;
        this.token = token;
    }
    

    

    
    
}
