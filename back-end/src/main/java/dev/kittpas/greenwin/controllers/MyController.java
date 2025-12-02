package dev.kittpas.greenwin.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.kittpas.greenwin.Entity.History;
import dev.kittpas.greenwin.Entity.Location;
import dev.kittpas.greenwin.Entity.Person;
import dev.kittpas.greenwin.Entity.Request;
import dev.kittpas.greenwin.Entity.Rider;
import dev.kittpas.greenwin.Entity.RiderLocation;
import dev.kittpas.greenwin.Entity.RiderRegister;
import dev.kittpas.greenwin.Entity.Summary;
import dev.kittpas.greenwin.Service.HistoryService;
import dev.kittpas.greenwin.Service.LocationService;
import dev.kittpas.greenwin.Service.PersonService;
import dev.kittpas.greenwin.Service.RequestService;
import dev.kittpas.greenwin.Service.RiderLocationService;
import dev.kittpas.greenwin.Service.RiderRegisterService;
import dev.kittpas.greenwin.Service.RiderService;
import dev.kittpas.greenwin.Service.SummaryService;
import dev.kittpas.greenwin.config.JwtUtil;
import dev.kittpas.greenwin.dto.DataResponse;
import dev.kittpas.greenwin.dto.EditPersonRequest;
import dev.kittpas.greenwin.dto.EditRiderRequest;
import dev.kittpas.greenwin.dto.LoginRequest;
import dev.kittpas.greenwin.dto.RiderLoginRequest;
import dev.kittpas.greenwin.dto.RiderResponse;
import dev.kittpas.greenwin.dto.SearchRequest;
import dev.kittpas.greenwin.dto.SentLoginDataRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api")
public class MyController {
    @Autowired
    private PersonService personService;
    @Autowired
    private LocationService locationService;
    @Autowired
    private RiderLocationService riderLocationService;
    @Autowired
    private RequestService requestService;
    @Autowired
    private RiderService riderService;
    @Autowired
    private SummaryService summaryService;
    @Autowired
    private HistoryService historyService;
    @Autowired
    private RiderRegisterService riderRegisterService;
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @Autowired
    private JwtUtil jwtUtil;

    // Customer API

    @GetMapping("/user")
    public List<Person> findPersons() {
        return personService.findPerson(null);
    }

    @PostMapping("/search")
    public List<Person> searchPersons(@RequestBody SearchRequest dto) {
        System.out.println("Keyword received: " + dto.getKeyword());
        return personService.searchName(dto.getKeyword());
    }

    @PostMapping("/add") // Create
    public ResponseEntity<?> addPerson(@RequestBody Person person) {

        // ตรวจสอบว่า username มีอยู่แล้ว
        if (personService.existsByUsername(person.getUsername())) {
            // ส่ง HTTP 409 Conflict พร้อมข้อความ
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("Username already exists");
        }

        // Hash password
        String plainPassword = person.getPassword();
        String hashedPassword = BCrypt.hashpw(plainPassword, BCrypt.gensalt());
        person.setPassword(hashedPassword);

        // บันทึกลง database
        Person savedPerson = personService.addPerson(person);
        return ResponseEntity.ok(savedPerson);
    }

    @DeleteMapping("/delete/{id_key}")
    public void deletePerson(@PathVariable int id_key) {
        personService.deletPerson(id_key);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) { // ใช้?เพราะจะได้ไปเฉพาะเจาะจงType
        String username = request.getUsername();
        String password = request.getPassword();

        Optional<Person> personOp = personService.loginPerson(username);

        if (personOp.isPresent()) { // เช็คว่ามีค่านั้นหรือป่าว
            Person person = personOp.get();

            if (BCrypt.checkpw(password, person.getPassword())) { // ตรวจสอบรหัส

                SentLoginDataRequest dto = new SentLoginDataRequest(person);

                Map<String, Object> claims = new HashMap<>();
                claims.put("username", person.getUsername());
                claims.put("fname", person.getFname());
                claims.put("lname", person.getLname());
                claims.put("tel", person.getTel());
                String token = jwtUtil.generateAccessToken(person.getUsername(), claims);
                DataResponse response = new DataResponse("Login Success", dto, token); // เก็บข้อมูลทั้งหมดของusernameนั้น
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(401).body("Wrong Password");
            }
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

    @PatchMapping("/edit/{id}")
    public ResponseEntity<?> edit(@PathVariable int id, @RequestBody EditPersonRequest request) {
        try {
            Person update = personService.updatePerson(id, request);
            return ResponseEntity.ok(update);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    // Request API

    @GetMapping("/location")
    public List<Location> findLocations() {
        return locationService.findLocation(null);
    }

    @GetMapping("/riderlocation")
    public List<RiderLocation> findRiderLocations() {
        return riderLocationService.findRiderLocation(riderLocationService);
    }

    @PostMapping("/addrequest")
    public Request addRequest(@RequestBody Request request) {
        Request savedRequest = requestService.addRequest(request);
        simpMessagingTemplate.convertAndSend("/topic/new-request", savedRequest);
        return requestService.addRequest(request);
    }

    @PostMapping("/addsummary")
    public Summary addSummary(@RequestBody Summary summary) {
        Summary savedSummary = summaryService.addSummary(summary);
        simpMessagingTemplate.convertAndSend("/topic/new-summary" + summary.getCustomerUsername(), savedSummary);
        return savedSummary;
    }

    @DeleteMapping("/delrequest/{username}")
    public void deleteRequest(@PathVariable String username) {
        simpMessagingTemplate.convertAndSend("/topic/delete-request", username);
        requestService.deleteRequest(username);
    }

    // Rider API

    @GetMapping("/allrider")
    public List<Rider> findRider() {
        return riderService.findRider(null);
    }

    @PostMapping("/riderlogin")
    public ResponseEntity<?> riderLogin(@RequestBody RiderLoginRequest riderLoginRequest) {
        String username = riderLoginRequest.getUsername();
        String password = riderLoginRequest.getPassword();

        Optional<Rider> riderOp = riderService.loginRider(username);

        if (riderOp.isPresent()) {
            Rider rider = riderOp.get();

            if (BCrypt.checkpw(password, rider.getPassword())) {

                Map<String, Object> claims = new HashMap<>();
                claims.put("username", rider.getUsername());
                claims.put("rider_firstname", rider.getRider_firstname());
                claims.put("rider_lastname", rider.getRider_lastname());
                claims.put("tel", rider.getTel());
                claims.put("vehicle", rider.getVehicle());
                claims.put("riderLocation", rider.getRiderLocation());
                claims.put("license", rider.getLicense());
                String riderToken = jwtUtil.generateAccessToken(rider.getUsername(), claims);
                RiderResponse response = new RiderResponse("Login Success", rider, riderToken);
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(404).body("Wrong Password");
            }
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

    @PostMapping("/addrider")
    public Rider addRider(@RequestBody Rider rider) {
        String plainPassword = rider.getPassword();
        String hashedPassword = BCrypt.hashpw(plainPassword, BCrypt.gensalt());
        rider.setPassword(hashedPassword);
        return riderService.addRider(rider);
    }

    @GetMapping("/request")
    public List<Request> findRequest() {
        return requestService.findRequest(null);
    }

    @MessageMapping("/send-message")
    @SendTo("/topic/messages")
    public String sendMessage(String message) {
        System.out.println("Message: " + message);
        return "Frome Preme:" + message;
    }

    @DeleteMapping("/deletesummary/{customerUsername}")
    public void deleteSummary(@PathVariable String customerUsername) {
        simpMessagingTemplate.convertAndSend("/topic/delete-summary", customerUsername);
        summaryService.deleteSummary(customerUsername);
        requestService.deleteRequest(customerUsername);

    }

    @PostMapping("available/{riderLocation}")
    public RiderLocation availableRider(@PathVariable String riderLocation) {
        RiderLocation updatedRider = riderLocationService.riderAvailable(riderLocation);

        simpMessagingTemplate.convertAndSend("/topic/riderLocation", updatedRider);
        return updatedRider;
    }

    @PostMapping("unavailable/{riderLocation}")
    public RiderLocation unavailableRider(@PathVariable String riderLocation) {
        RiderLocation updatedRider = riderLocationService.riderUnavailable(riderLocation);

        simpMessagingTemplate.convertAndSend("/topic/riderLocation", updatedRider);
        return updatedRider;
    }

    @PatchMapping("/editrider/{id}")
    public ResponseEntity<?> editRider(@PathVariable int id, @RequestBody EditRiderRequest request) {
        try {
            Rider update = riderService.updateRider(id, request);
            return ResponseEntity.ok(update);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PatchMapping("/statuslogin/{username}")
    public Rider statusRiderLogin(@PathVariable String username) {
        return riderService.riderLogin(username);
    }

    @PatchMapping("/statuslogout/{username}")
    public Rider statusRiderLogout(@PathVariable String username) {
        return riderService.riderLogout(username);
    }

    // Test Jwt
    @PostMapping("/testjwt")
    public ResponseEntity<?> testJwt(@RequestBody LoginRequest request) {
        Optional<Person> personOp = personService.loginPerson(request.getUsername());

        if (personOp.isPresent()) {
            Person person = personOp.get();

            if (BCrypt.checkpw(request.getPassword(), person.getPassword())) {

                Map<String, Object> claims = new HashMap<>();
                claims.put("username", person.getUsername());
                claims.put("fname", person.getFname());
                claims.put("lname", person.getLname());
                claims.put("tel", person.getTel());

                String accessToken = jwtUtil.generateAccessToken(person.getUsername(), claims);

                String refreshToken = jwtUtil.generateRefreshToken(person.getUsername());

                return ResponseEntity.ok(Map.of(
                        "message", "Login Success",
                        "accessToken", accessToken,
                        "refreshToken", refreshToken));
            }
            return ResponseEntity.status(401).body("Wrong Password");
        }
        return ResponseEntity.status(404).body("User not found");
    }

    // History
    @PostMapping("/addhistory")
    public History addHistory(@RequestBody History history) {
        List<RiderLocation> riders = riderLocationService.getAllRiders();
        simpMessagingTemplate.convertAndSend("/topic/riderLocation", riders);

        return historyService.addHistory(history);
    }

    @GetMapping("/findhistory/{customerUsername}")
    public List<History> getUserHistory(@PathVariable String customerUsername) {
        return historyService.getHistoryByUser(customerUsername);
    }

    // RiderRegister
    @PostMapping("/riderregister")
    public RiderRegister riderRegister(@RequestBody RiderRegister riderRegister) {
        return riderRegisterService.addriderRegister(riderRegister);
    }

    @GetMapping("/getriderregister")
    public List<RiderRegister> findRiderRegister() {
        return riderRegisterService.getRiderRegister(riderRegisterService);
    }

    @DeleteMapping("/deltriderregister/{username}")
    public void deleteRiderRegister(@PathVariable String username) {
        riderRegisterService.deleteRiderRegister(username);
    }

}
