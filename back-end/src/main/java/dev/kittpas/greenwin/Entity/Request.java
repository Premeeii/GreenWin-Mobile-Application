package dev.kittpas.greenwin.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "request")
public class Request {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "requestid")
    private Integer requestid;

    @Column(name = "pickupName1")
    private String pickupName1;

    @Column(name = "pickupName2")
    private String pickupName2;

    @Column(name = "riderLocation")
    private String riderLocation;

    @Column(name = "destination")
    private String destination;

    @Column(name = "username")
    private String username;

    @Column(name = "fname")
    private String fname;

    @Column(name = "lname")
    private String lname;

    @Column(name = "tel")
    private String tel;

    @Column(length = 1000, name="imageRequest")
    private String imageRequest;

    @Column(name = "customerImage")
    private String customerImage;

    public Request(){

    }

    public Request(String pickupName1, String pickupName2, String riderLocation, String destination,
            String username, String fname, String lname, String tel, String imageRequest, String customerImage) {
        this.pickupName1 = pickupName1;
        this.pickupName2 = pickupName2;
        this.riderLocation = riderLocation;
        this.destination = destination;
        this.username = username;
        this.fname = fname;
        this.lname = lname;
        this.tel = tel;
        this.imageRequest =imageRequest;
        this.customerImage = customerImage;
    }

    public Integer getRequestid() {
        return requestid;
    }

    public void setRequestid(Integer requestid) {
        this.requestid = requestid;
    }

    public String getPickupName1() {
        return pickupName1;
    }

    public void setPickupName1(String pickupName1) {
        this.pickupName1 = pickupName1;
    }

    public String getPickupName2() {
        return pickupName2;
    }

    public void setPickupName2(String pickupName2) {
        this.pickupName2 = pickupName2;
    }

    public String getRiderLocation() {
        return riderLocation;
    }

    public void setRiderLocation(String riderLocation) {
        this.riderLocation = riderLocation;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getImageRequest() {
        return imageRequest;
    }

    public void setImageRequest(String imageRequest) {
        this.imageRequest = imageRequest;
    }

    public String getCustomerImage() {
        return customerImage;
    }

    public void setCustomerImage(String customerImage) {
        this.customerImage = customerImage;
    }

}
