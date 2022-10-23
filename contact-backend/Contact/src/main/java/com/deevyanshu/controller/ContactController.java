package com.deevyanshu.controller;



import java.util.Collections;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deevyanshu.entity.Authenticate;
import com.deevyanshu.entity.Contact;
import com.deevyanshu.service.ContactService;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/contact")
public class ContactController {
	
	@Autowired
	private ContactService service;
	
	public Authenticate mes=new Authenticate();
	
	
	/*@PostMapping("/message")
	public Authenticate message(@RequestBody Authenticate auth)
	{
		BeanUtils.copyProperties(auth, mes);
		return auth;
	}*/
	
	@PostMapping("/message")
	public Authenticate message(@RequestBody Authenticate auth)
	{
		BeanUtils.copyProperties(auth, mes);
		return auth;
	}
	
	
	@GetMapping("/all/{uid}")
	public ResponseEntity<List<Contact>> getAll(@PathVariable("uid")int uid)
	{
		if(mes.getMessage().equals("Authenticated"))
		{
			return ResponseEntity.ok(service.getAll(uid));
		}else
		{
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		
		
	}
	

	@PostMapping( "/add/{uid}")
	public ResponseEntity<Contact> add(@RequestBody Contact con,@PathVariable("uid") int uid)
	{
		
		if(mes.getMessage().equals("Authenticated"))
		{
			return ResponseEntity.ok(service.add(con, uid));
		}else
		{
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		
		
		
	}
	
	@GetMapping("/test")
	public Authenticate get()
	{
		return mes;
	}
}
