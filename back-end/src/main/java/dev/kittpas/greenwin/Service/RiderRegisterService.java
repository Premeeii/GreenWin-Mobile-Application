package dev.kittpas.greenwin.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.kittpas.greenwin.Entity.RiderRegister;
import dev.kittpas.greenwin.Repository.RiderRegisterRepository;

@Service
public class RiderRegisterService {

    @Autowired
    private RiderRegisterRepository riderRegisterRepository;
    
    public  RiderRegister addriderRegister(RiderRegister riderRegister){
        return riderRegisterRepository.save(riderRegister);
    }

}
