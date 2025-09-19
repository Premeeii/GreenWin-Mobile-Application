package dev.kittpas.greenwin.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.kittpas.greenwin.Entity.Rider;
import dev.kittpas.greenwin.Repository.RiderLocationRepository;
import dev.kittpas.greenwin.Repository.RiderRepository;


@Service
public class RiderService {

    @Autowired
    private RiderRepository riderRepository;
    @Autowired
    private RiderLocationRepository riderLocationRepository;

    public Optional<Rider> loginRider(String username){
        return riderRepository.findByUsername(username);
    }

    public List<Rider> findRider(Rider rider){
        return riderRepository.findAll();
    }

    public Rider addRider(Rider rider){
        return riderRepository.save(rider);
    }



}
