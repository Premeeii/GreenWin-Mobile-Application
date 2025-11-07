package dev.kittpas.greenwin.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.kittpas.greenwin.Entity.History;
import dev.kittpas.greenwin.Repository.HistoryRepository;

@Service
public class HistoryService {

    @Autowired
    private HistoryRepository historyRepository;

    public History addHistory(History history){
        return historyRepository.save(history);
    }

    public List<History> getHistoryByUser(String customerUsername){
        return historyRepository.findByCustomerUsername(customerUsername);
    }

}
