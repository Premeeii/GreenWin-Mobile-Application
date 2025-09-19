package dev.kittpas.greenwin.Repository;

import dev.kittpas.greenwin.Entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {

    // ค้นหาคนตาม username (เช่นสำหรับ login)
    Optional<Person> findByUsername(String username);

    // ค้นหาคนตามชื่อจริง (fname) ที่มีคำบางคำ (ignore case) 
    List<Person> findByFnameContainingIgnoreCase(String fname);

    // ค้นหาคนตามนามสกุล (lname) ที่มีคำบางคำ (ignore case) 
    List<Person> findByLnameContainingIgnoreCase(String lname);

    Optional<Person> findById(int id);

    // ค้นหาคนตามเบอร์โทรศัพท์ (tel)
    Optional<Person> findByTel(String tel);
}


