package dev.kittpas.greenwin.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.kittpas.greenwin.Entity.Rider;

public interface RiderRepository extends JpaRepository<Rider, Integer>{
    Optional<Rider> findByUsername(String username);

    Optional<Rider> findById(int Id);

}
