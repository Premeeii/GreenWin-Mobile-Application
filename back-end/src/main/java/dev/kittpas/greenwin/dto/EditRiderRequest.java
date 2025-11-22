package dev.kittpas.greenwin.dto;

public class EditRiderRequest {
    private String imageRider;
    private String tel;

    public String getImageRider() {
        return imageRider;
    }
    public void setImageRider(String imageRider) {
        this.imageRider = imageRider;
    }
    public String getTel() {
        return tel;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }
    
    public EditRiderRequest(String imageRider, String tel) {
        this.imageRider = imageRider;
        this.tel = tel;
    }

    

    

}
