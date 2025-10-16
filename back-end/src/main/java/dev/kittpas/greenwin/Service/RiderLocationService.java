package dev.kittpas.greenwin.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.kittpas.greenwin.Entity.RiderLocation;
import dev.kittpas.greenwin.Repository.RiderLocationRepository;
import jakarta.transaction.Transactional;

@Service
public class  RiderLocationService {
    
    @Autowired
    private RiderLocationRepository riderLocationRepository;

    public List<RiderLocation> findRiderLocation(RiderLocationService riderLocation){
        return riderLocationRepository.findAll();
    }

    @Transactional
    public RiderLocation riderAvailable(String riderLocation){
        RiderLocation rl = riderLocationRepository.findByRiderLocation(riderLocation)
        .orElseThrow(() -> new RuntimeException("ไม่มีจุดนี้" + riderLocation));

        rl.setAvailableRider(rl.getAvailableRider() + 1);
        return riderLocationRepository.save(rl);
    }

    @Transactional
    public RiderLocation riderUnavailable(String riderLocation){
        RiderLocation rl = riderLocationRepository.findByRiderLocation(riderLocation)
        .orElseThrow(() -> new RuntimeException("ไม่มีจุด" + riderLocation));

        rl.setAvailableRider(rl.getAvailableRider() - 1);
        return riderLocationRepository.save(rl);
    }

    public List<RiderLocation> getAllRiders(){
        return riderLocationRepository.findAll();
    }



    
}
