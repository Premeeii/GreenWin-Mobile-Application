package dev.kittpas.greenwin.dto;

public class EditPersonRequest {
    private String fname;
    private String lname;
    private String tel;
    private String password;
    private String imageUri;
    
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
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getImageUri() {
        return imageUri;
    }
    public void setImageUri(String imageUri) { // ทำให้ JSON ใช้ชื่อ imageUri
        this.imageUri = imageUri;
    }

    public EditPersonRequest(String fname, String lname, String tel, String password, String imageUri) {
        this.fname = fname;
        this.lname = lname;
        this.tel = tel;
        this.password = password;
        this.imageUri = imageUri;
    }

    
    
    
}
