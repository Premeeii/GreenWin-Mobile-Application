package dev.kittpas.greenwin.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import dev.kittpas.greenwin.Entity.Location;


public interface LocationRepository extends JpaRepository<Location, String> {
  
     List<Location> findByPickupName2(String pickupName2);
}
