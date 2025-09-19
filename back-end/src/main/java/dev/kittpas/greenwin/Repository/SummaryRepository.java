package dev.kittpas.greenwin.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import dev.kittpas.greenwin.Entity.Summary;

public interface SummaryRepository extends JpaRepository<Summary, Integer>{

     void deleteByCustomerUsername(String customerUsername);

}
