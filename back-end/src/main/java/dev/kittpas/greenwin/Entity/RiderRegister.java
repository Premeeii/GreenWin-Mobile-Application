package dev.kittpas.greenwin.Entity;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "riderregister")
public class RiderRegister {

    @Id
    @Column(name = "personId", length = 13)
    private String personId;

    @CreationTimestamp
    @Column(name = "registerTime")
    private String registerTime;

    @Column(name = "riderFirstname")
    private String riderFirstname;

    @Column(name = "riderLastname")
    private String riderLastname;

    @Column(name = "brandVehicle")
    private String brandVehicle;

    @Column(name = "modelVehicle")
    private String modelVehicle;

    @Column(name = "license")
    private String license;

    @Column(name = "riderLicense")
    private String riderLicense;

    @Column(name = "riderLocation")
    private String riderLocation;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "tel")
    private String tel;

    public RiderRegister() {

    }

    public String getPersonId() {
        return personId;
    }

    public void setPersonId(String personId) {
        this.personId = personId;
    }

    public String getRiderFirstname() {
        return riderFirstname;
    }

    public void setRiderFirstname(String riderFirstname) {
        this.riderFirstname = riderFirstname;
    }

    public String getRiderLastname() {
        return riderLastname;
    }

    public void setRiderLastname(String riderLastname) {
        this.riderLastname = riderLastname;
    }

    public String getBrandVehicle() {
        return brandVehicle;
    }

    public void setBrandVehicle(String brandVehicle) {
        this.brandVehicle = brandVehicle;
    }

    public String getModelVehicle() {
        return modelVehicle;
    }

    public void setModelVehicle(String modelVehicle) {
        this.modelVehicle = modelVehicle;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public String getRiderLicense() {
        return riderLicense;
    }

    public void setRiderLicense(String riderLicense) {
        this.riderLicense = riderLicense;
    }

    public String getRiderLocation() {
        return riderLocation;
    }

    public void setRiderLocation(String riderLocation) {
        this.riderLocation = riderLocation;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

        public String getRegisterTime() {
        return registerTime;
    }

    public void setRegisterTime(String registerTime) {
        this.registerTime = registerTime;
    }

    public RiderRegister(String personId, String riderFirstname, String riderLastname, String brandVehicle,
            String modelVehicle, String license, String riderLicense, String riderLocation, String username,
            String password, String email,  String tel, String registerTime) {
        this.personId = personId;
        this.riderFirstname = riderFirstname;
        this.riderLastname = riderLastname;
        this.brandVehicle = brandVehicle;
        this.modelVehicle = modelVehicle;
        this.license = license;
        this.riderLicense = riderLicense;
        this.riderLocation = riderLocation;
        this.username = username;
        this.password = password;
        this.email = email;
        this.tel = tel;
        this.registerTime = registerTime;
    }



}
