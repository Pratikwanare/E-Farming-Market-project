package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.LoggedInUser;
import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserController {

	@Autowired
	UserService us;
	
	@GetMapping("/getallusers")
	public List<User> getAllCategory()
	{
		return us.getUser();
	}
	
	@PostMapping("/login")
	public User getUser(@RequestBody LoginCheck idpass)
	{
		return us.getUser(idpass.getEmail(),idpass.getPassword());
	}
	
}