package dev.kittpas.greenwin.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import dev.kittpas.greenwin.Entity.Request;




public interface RequestRepository extends JpaRepository<Request, Integer>{
       
    void deleteByUsername(String username);
}
