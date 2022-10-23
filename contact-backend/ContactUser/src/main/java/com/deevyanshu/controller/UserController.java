package com.deevyanshu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.deevyanshu.entity.Authenticate;
import com.deevyanshu.entity.User;
import com.deevyanshu.service.UserService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("api/v1/user")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@Autowired
	public RestTemplate restTemplate;
	
	@PostMapping("/register")
	public User register(@RequestBody User user)
	{
		return service.register(user);
	}
	
	@GetMapping("/auth")
	@PreAuthorize("hasAnyRole('user','admin')")
	public Authenticate auth()
	{
		
		return restTemplate.postForObject("http://localhost:9010/api/v1/contact/message", new Authenticate("Authenticated"), Authenticate.class);
	}
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username)
	{
		return service.getUser(username);
	}

}
