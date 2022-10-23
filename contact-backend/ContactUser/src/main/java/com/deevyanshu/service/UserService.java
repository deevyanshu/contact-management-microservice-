package com.deevyanshu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.deevyanshu.entity.User;
import com.deevyanshu.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	@Autowired
	private UserRepository repository;
	
	public User register(User user)
	{
		user.setPassword(encoder.encode(user.getPassword()));
		user.setEnabled(true);
		user.setRole("ROLE_user");
		return repository.save(user);
	}
	
	public User getUser(String username)
	{
		return repository.getUserByUsername(username);
	}
	

}
