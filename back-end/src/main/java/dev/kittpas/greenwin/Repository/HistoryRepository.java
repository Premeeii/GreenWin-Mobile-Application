package dev.kittpas.greenwin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.kittpas.greenwin.Entity.History;

public interface HistoryRepository extends JpaRepository<History, Integer> {

}
