package dev.kittpas.greenwin.dto;

import dev.kittpas.greenwin.Entity.Rider;

public class SentRiderLoginDataRequest {
      
    private String rider_firstname;
    private String rider_lastname;
    private String tel;
    private String username;
    private String vahicle;
    private String rider_location;
    private String license;
    private Integer id;
    private String riderImage;

    public SentRiderLoginDataRequest(Rider rider) {
        this.rider_firstname = rider.getRider_firstname();
        this.rider_lastname = rider.getRider_lastname();
        this.tel = rider.getTel();
        this.username = rider.getUsername();
        this.vahicle = rider.getVehicle();
        this.rider_location = rider.getRiderLocation();
        this.license = rider.getLicense();
        this.id = rider.getRider_id();
        this.riderImage = rider.getRiderImage();
    }

    public String getRider_firstname() {
        return rider_firstname;
    }

    public void setRider_firstname(String rider_firstname) {
        this.rider_firstname = rider_firstname;
    }

    public String getRider_lastname() {
        return rider_lastname;
    }

    public void setRider_lastname(String rider_lastname) {
        this.rider_lastname = rider_lastname;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getVahicle() {
        return vahicle;
    }

    public void setVahicle(String vahicle) {
        this.vahicle = vahicle;
    }

    public String getRider_location() {
        return rider_location;
    }

    public void setRider_location(String rider_location) {
        this.rider_location = rider_location;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRiderImage() {
        return riderImage;
    }

    public void setRiderImage(String riderImage) {
        this.riderImage = riderImage;
    }

    

    


    
    
}
