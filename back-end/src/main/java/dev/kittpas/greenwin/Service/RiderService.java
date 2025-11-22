package dev.kittpas.greenwin.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.kittpas.greenwin.Entity.Rider;
import dev.kittpas.greenwin.Repository.RiderLocationRepository;
import dev.kittpas.greenwin.Repository.RiderRepository;
import dev.kittpas.greenwin.dto.EditRiderRequest;
import jakarta.transaction.Transactional;

@Service
public class RiderService {

    @Autowired
    private RiderRepository riderRepository;
    @Autowired
    private RiderLocationRepository riderLocationRepository;

    public Optional<Rider> loginRider(String username) {
        return riderRepository.findByUsername(username);
    }

    public List<Rider> findRider(Rider rider) {
        return riderRepository.findAll();
    }

    public Rider addRider(Rider rider) {
        return riderRepository.save(rider);
    }

    public Rider updateRider(int id, EditRiderRequest request) {
        Optional<Rider> riderOp = riderRepository.findById(id);

        if (riderOp.isPresent()) {
            Rider rider = riderOp.get();

            if (request.getTel() != null) {
                rider.setTel(request.getTel());
            }
            if (request.getImageRider() != null) {
                rider.setRiderImage(request.getImageRider());
            }
            return riderRepository.save(rider);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    @Transactional
    public Rider riderLogin(String username) {
        Rider rider = riderRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("ไม่มีชื่อ" + username));

        rider.setStatus(true);
        return rider;
    }

    @Transactional
    public Rider riderLogout(String username) {
        Rider rider = riderRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("ไม่มีชื่อ " + username));

        rider.setStatus(false); // ล็อกเอาต์: 0 / false
        return rider;
    }

}
