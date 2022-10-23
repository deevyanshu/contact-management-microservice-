package com.deevyanshu.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deevyanshu.entity.Contact;
import com.deevyanshu.repository.ContactRepository;

@Service
public class ContactService {
	
	@Autowired
	private ContactRepository repository;
	
	public List<Contact> getAll(int uid)
	{
		List<Contact> list= repository.findAll();
		List<Contact> contacts=new ArrayList<>();
		for(Contact c:list)
		{
			if(c.getUid()==uid)
			{
				contacts.add(c);
			}
		}
		return contacts;
	}
	
	public Contact add(Contact con,int uid)
	{
		con.setUid(uid);
		return repository.save(con);
	}

}
