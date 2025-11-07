package dev.kittpas.greenwin.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;

@Entity
@Table(name="riderlocation")
public class RiderLocation {

    @Id
    @Column(name = "riderLocation")
    private String riderLocation;

    @Column(length = 1000,name = "imageRiderLocation")
    private String imageRiderLocation;

    @Column(name = "availableRider")
    @Min(0)
    private Integer availableRider = 0;

    public RiderLocation(){
        
    }

    public String getRiderLocation() {
        return riderLocation;
    }

    public void setRiderLocation(String riderLocation) {
        this.riderLocation = riderLocation;
    }

    public String getImageRiderLocation() {
        return imageRiderLocation;
    }

    public void setImageRiderLocation(String imageRiderLocation) {
        this.imageRiderLocation = imageRiderLocation;
    }

    public Integer getAvailableRider() {
        return availableRider;
    }

    public void setAvailableRider(Integer availableRider) {
        this.availableRider = availableRider;
    }

    public RiderLocation(String riderLocation, String imageRiderLocation, Integer availableRider) {
        this.riderLocation = riderLocation;
        this.imageRiderLocation = imageRiderLocation;
        this.availableRider = availableRider;
    }


    

    

}
