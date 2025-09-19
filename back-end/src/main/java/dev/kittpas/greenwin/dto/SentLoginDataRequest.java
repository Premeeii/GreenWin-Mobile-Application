package dev.kittpas.greenwin.dto;

import dev.kittpas.greenwin.Entity.Person;

public class SentLoginDataRequest {

    private String username;
    private String fname;
    private String lname;
    private String tel;
    private String imageUri;
    private Integer id;

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

    public String getImageUri() {
        return imageUri;
    }

    public void setImageUri(String imageUri) {
        this.imageUri = imageUri;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public SentLoginDataRequest(Person person) {
        this.username = person.getUsername();
        this.fname = person.getFname();
        this.lname = person.getLname();
        this.tel = person.getTel();
        this.imageUri = person.getImageURI();
        this.id = person.getId();
    }

    

    

    

}
