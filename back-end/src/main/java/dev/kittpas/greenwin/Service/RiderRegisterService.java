package dev.kittpas.greenwin.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.kittpas.greenwin.Entity.RiderRegister;
import dev.kittpas.greenwin.Repository.RiderRegisterRepository;
import jakarta.transaction.Transactional;

@Service
public class RiderRegisterService {

    @Autowired
    private RiderRegisterRepository riderRegisterRepository;
    
    public  RiderRegister addriderRegister(RiderRegister riderRegister){
        return riderRegisterRepository.save(riderRegister);
    }

    public List<RiderRegister> getRiderRegister(RiderRegisterService riderRegister){
        return riderRegisterRepository.findAll();
    }

    @Transactional
    public void deleteRiderRegister(String username){
        riderRegisterRepository.deleteByUsername(username);
    }

}
