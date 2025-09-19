package dev.kittpas.greenwin.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.kittpas.greenwin.Entity.Location;
import dev.kittpas.greenwin.Repository.LocationRepository;


@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;
 
    public List<Location> findLocation(Location location){ //ดึงข้อมูลlocation
        return locationRepository.findAll();
    }

}


