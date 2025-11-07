package dev.kittpas.greenwin.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "location")
public class Location {

    @Column(name = "pickupName1")
    private String pickupName1;

    @Id
    @Column(name = "pickupName2")
    private String pickupName2;

    @Column(length = 1000, name = "imageLocation")
    private String imageLocation;

    @Column(length = 1000, name = "imageLocation2")
    private String imageLocation2;

    @Column(name = "description")
    private String description;

    public Location() {

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

    public String getImageLocation() {
        return imageLocation;
    }

    public void setImageLocation(String imageLocation) {
        this.imageLocation = imageLocation;
    }

    public String getImageLocation2() {
        return imageLocation2;
    }

    public void setImageLocation2(String imageLocation2) {
        this.imageLocation2 = imageLocation2;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Location(String pickupName1, String pickupName2, String imageLocation, String imageLocation2, String description) {
        this.pickupName1 = pickupName1;
        this.pickupName2 = pickupName2;
        this.imageLocation = imageLocation;
        this.imageLocation2 = imageLocation2;
        this.description = description;
    }

}
