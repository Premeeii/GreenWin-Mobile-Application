package dev.kittpas.greenwin.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.kittpas.greenwin.Entity.RiderLocation;

public interface RiderLocationRepository extends JpaRepository<RiderLocation, String>{

    Optional<RiderLocation> findByRiderLocation(String riderLocation);

}
