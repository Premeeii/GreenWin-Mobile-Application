package dev.kittpas.greenwin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.kittpas.greenwin.Entity.History;
import java.util.List;


public interface HistoryRepository extends JpaRepository<History, Integer> {
    List<History> findByCustomerUsername(String customerUsername);

}
