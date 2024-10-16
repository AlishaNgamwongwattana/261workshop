package com.example.service;

@RestController
public class MyController {
	
	@CrossOrigin(origins = {"http://localhost:3000", "http://node-server:3000"})
    @POSTMapping("/hello")
    public String sayHello(@RequestParam(value = "myName", defaultValue = "World") String name,
                           @RequestParam(value = "lastName", defaultValue = "World") String lastname) {
        return String.format("Hello %s %s!", name,lastname);
    }
	
}
