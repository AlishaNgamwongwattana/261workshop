package com.example.crud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
//import org.springframework.web.client.RestTemplate;
//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Student> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/add")
    public Student createUser(@RequestBody Student student) {
        return userRepository.save(student);
    }
}
