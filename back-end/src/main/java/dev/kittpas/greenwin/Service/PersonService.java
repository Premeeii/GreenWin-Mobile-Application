package dev.kittpas.greenwin.Service;

import dev.kittpas.greenwin.Entity.Person;
import dev.kittpas.greenwin.Repository.PersonRepository;
import dev.kittpas.greenwin.dto.EditPersonRequest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public List<Person> findPerson(Person person) { // ดึงข้อมูล
        return personRepository.findAll();
    }

    public List<Person> searchName(String keyword) { // Search
        return personRepository.findByFnameContainingIgnoreCase(keyword);
    }

    public Person addPerson(Person person) { // Create
        return personRepository.save(person);
    }

    public boolean existsByUsername(String username) {
        return personRepository.existsByUsername(username);
    }

    public void deletPerson(int id_key) {
        personRepository.deleteById(id_key);
    }

    public Optional<Person> loginPerson(String username) {
        return personRepository.findByUsername(username);

    }

    public Person updatePerson(int id, EditPersonRequest request) {
        Optional<Person> personOp = personRepository.findById(id); // ดึงข้อมูลจากidที่loginเข้ามา

        if (personOp.isPresent()) {
            Person person = personOp.get();

            if (request.getFname() != null) {
                person.setFname(request.getFname());
            }
            if (request.getLname() != null) {
                person.setLname(request.getLname());
            }
            if (request.getTel() != null) {
                person.setTel(request.getTel());
            }
            if (request.getPassword() != null) {
                person.setPassword(request.getPassword());
            }
            if (request.getImageUri() != null) {
                person.setImageURI(request.getImageUri()); // เซฟลงimageURIโดยใช้ requestของImageUri (กูใช้Formatผิด)
            }
            return personRepository.save(person);
        } else {
            throw new RuntimeException("User not found");
        }

    }

}
