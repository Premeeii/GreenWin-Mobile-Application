package dev.kittpas.greenwin.dto;

import dev.kittpas.greenwin.Entity.Rider;

public class RiderResponse {
    private String massage;
    private Rider rider;
    private String riderToken;
    
    public String getMassage() {
        return massage;
    }
    public void setMassage(String massage) {
        this.massage = massage;
    }
    public Rider getRider() {
        return rider;
    }
    public void setRider(Rider rider) {
        this.rider = rider;
    }

     public String getRiderToken() {
        return riderToken;
    }
    public void setRiderToken(String riderToken) {
        this.riderToken = riderToken;
    }

    public RiderResponse(String massage, Rider rider, String riderToken) {
        this.massage = massage;
        this.rider = rider;
        this.riderToken = riderToken;
    }
   

    

}
