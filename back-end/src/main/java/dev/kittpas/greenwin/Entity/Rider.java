package dev.kittpas.greenwin.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "rider")
public class Rider {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rider_id")
    private int rider_id;

    @Column(name = "rider_firstname")
    private String rider_firstname;

    @Column(name = "rider_lastname")
    private String rider_lastname;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "tel")
    private String tel;

    @Column(name = "vehicle")
    private String vehicle;
    
    @Column(name = "riderLocation")
    private String riderLocation;

    @Column(name = "license")
    private String license;

    @Column(length = 1000, name = "riderImage")
    private String riderImage;

    @Column(name = "status")
    private Boolean status;
    

    public Rider(){

    }
    
    public Rider(String rider_firstname, String rider_lastname, String username, String password, String tel,
            String vehicle, String riderLocation, String license, String riderImage, Boolean status) {
        this.rider_firstname = rider_firstname;
        this.rider_lastname = rider_lastname;
        this.username = username;
        this.password = password;
        this.tel = tel;
        this.vehicle = vehicle;
        this.riderLocation = riderLocation;
        this.license = license;
        this.riderImage = riderImage;
        this.status = status;
    }


    public int getRider_id() {
        return rider_id;
    }

    public void setRider_id(int rider_id) {
        this.rider_id = rider_id;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getVehicle() {
        return vehicle;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
    }

    public String getRiderLocation() {
        return riderLocation;
    }

    public void setRiderLocation(String riderLocation) {
        this.riderLocation = riderLocation;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public String getRiderImage() {
        return riderImage;
    }

    public void setRiderImage(String riderImage) {
        this.riderImage = riderImage;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    

    

    

    


    

    


}
