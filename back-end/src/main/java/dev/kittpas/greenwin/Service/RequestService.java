package dev.kittpas.greenwin.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.kittpas.greenwin.Entity.Request;
import dev.kittpas.greenwin.Repository.RequestRepository;
import jakarta.transaction.Transactional;


@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;


    public Request addRequest(Request request){
        return requestRepository.save(request);
    }

    @Transactional //ใส่เพื่อแก้ไขDatabase
    public void deleteRequest(String username){
        requestRepository.deleteByUsername(username);
    }

    public List<Request> findRequest(Request request){
        return requestRepository.findAll();
    }

}
