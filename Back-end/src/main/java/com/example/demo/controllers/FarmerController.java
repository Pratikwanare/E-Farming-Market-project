package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Farmer;
import com.example.demo.entities.RegisterValid;
import com.example.demo.services.FarmerService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class FarmerController {

	@Autowired
	FarmerService fs;
	
	@GetMapping("/getallfarmers")
	public List<Farmer> getAllFarmer()
	{
		return fs.getFarmer();
	}
	
	@PostMapping("/registerfarmer")
	public Farmer saveFarmer(@RequestBody Farmer f)
	{
		return fs.saveFarmer(f);
	}
	
}