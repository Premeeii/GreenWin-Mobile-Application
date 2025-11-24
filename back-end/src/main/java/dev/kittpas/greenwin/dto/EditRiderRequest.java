package dev.kittpas.greenwin.dto;

public class EditRiderRequest {
    private String riderImage;
    private String tel;

    public String getRiderImage() {
        return riderImage;
    }
    public void setRiderImage(String riderImage) {
        this.riderImage = riderImage;
    }
    public String getTel() {
        return tel;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }
    
    public EditRiderRequest(String riderImage, String tel) {
        this.riderImage = riderImage;
        this.tel = tel;
    }

    

    

}
