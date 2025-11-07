package dev.kittpas.greenwin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.kittpas.greenwin.Entity.RiderRegister;

public interface RiderRegisterRepository  extends JpaRepository<RiderRegister, String>{
    
    void deleteByUsername(String username);
}
