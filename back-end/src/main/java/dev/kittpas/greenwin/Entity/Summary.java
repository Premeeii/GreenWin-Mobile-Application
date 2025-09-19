package dev.kittpas.greenwin.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "requestsummary")
public class Summary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer summaryid;

    @Column(name = "riderUsername")
    private String riderUsername;

    @Column(name = "riderFname")
    private String riderFname;

    @Column(name = "riderLname")
    private String riderLname;

    @Column(name = "license")
    private String license;

    @Column(name = "riderTel")
    private String riderTel;

    @Column(name = "riderLocation")
    private String riderLocation;

    @Column(name = "pickupName1")
    private String pickupName1;

    @Column(name = "pickupName2")
    private String pickupName2;

    @Column(name = "destination")
    private String destination;

    @Column(name = "customerUsername")
    private String customerUsername;

    @Column(name = "customerFname")
    private String customerFname;

    @Column(name = "customerLname")
    private String customerLname;

    @Column(name = "customerTel")
    private String customerTel;

    @Column(name = "vehicle")
    private String vehicle;

    @Column(name = "riderImage")
    private String riderImage;

    @Column(name = "customerImage")
    private String customerImage; 

    public Summary() {

    }

    public Integer getSummaryid() {
        return summaryid;
    }

    public void setSummaryid(Integer summaryid) {
        this.summaryid = summaryid;
    }

    public String getRiderUsername() {
        return riderUsername;
    }

    public void setRiderUsername(String riderUsername) {
        this.riderUsername = riderUsername;
    }

    public String getRiderFname() {
        return riderFname;
    }

    public void setRiderFname(String riderFname) {
        this.riderFname = riderFname;
    }

    public String getRiderLname() {
        return riderLname;
    }

    public void setRiderLname(String riderLname) {
        this.riderLname = riderLname;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public String getRiderTel() {
        return riderTel;
    }

    public void setRiderTel(String riderTel) {
        this.riderTel = riderTel;
    }

    public String getRiderLocation() {
        return riderLocation;
    }

    public void setRiderLocation(String riderLocation) {
        this.riderLocation = riderLocation;
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

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getCustomerUsername() {
        return customerUsername;
    }

    public void setCustomerUsername(String customerUsername) {
        this.customerUsername = customerUsername;
    }

    public String getCustomerFname() {
        return customerFname;
    }

    public void setCustomerFname(String customerFname) {
        this.customerFname = customerFname;
    }

    public String getCustomerLname() {
        return customerLname;
    }

    public void setCustomerLname(String customerLname) {
        this.customerLname = customerLname;
    }

    public String getCustomerTel() {
        return customerTel;
    }

    public void setCustomerTel(String customerTel) {
        this.customerTel = customerTel;
    }

    public String getVehicle() {
        return vehicle;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
    }


    public String getRiderImage() {
        return riderImage;
    }

    public void setRiderImage(String riderImage) {
        this.riderImage = riderImage;
    }

    public String getCustomerImage() {
        return customerImage;
    }

    public void setCustomerImage(String customerImage) {
        this.customerImage = customerImage;
    }

    public Summary(Integer summaryid, String riderUsername, String riderFname, String riderLname, String license,
            String riderTel, String riderLocation, String pickupName1, String pickupName2, String destination,
            String customerUsername, String customerFname, String customerLname, String customerTel, String vehicle,
            String riderImage, String customerImage) {
        this.summaryid = summaryid;
        this.riderUsername = riderUsername;
        this.riderFname = riderFname;
        this.riderLname = riderLname;
        this.license = license;
        this.riderTel = riderTel;
        this.riderLocation = riderLocation;
        this.pickupName1 = pickupName1;
        this.pickupName2 = pickupName2;
        this.destination = destination;
        this.customerUsername = customerUsername;
        this.customerFname = customerFname;
        this.customerLname = customerLname;
        this.customerTel = customerTel;
        this.vehicle = vehicle;
        this.riderImage = riderImage;
        this.customerImage = customerImage;
    }

    

}
