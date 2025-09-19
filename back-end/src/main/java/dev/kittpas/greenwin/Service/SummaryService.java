package dev.kittpas.greenwin.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.kittpas.greenwin.Entity.Summary;
import dev.kittpas.greenwin.Repository.SummaryRepository;
import jakarta.transaction.Transactional;

@Service
public class SummaryService {
 
    @Autowired
    private SummaryRepository summaryRepository;

    public Summary addSummary(Summary summary){
        return summaryRepository.save(summary);
    }

    @Transactional
    public void deleteSummary(String customerUsername){
        summaryRepository.deleteByCustomerUsername(customerUsername);

    }

}
