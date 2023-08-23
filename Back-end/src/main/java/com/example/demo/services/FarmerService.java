package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Farmer;
import com.example.demo.entities.RegisterValid;
import com.example.demo.repositories.FarmerRepo;
@Service
public class FarmerService {

	@Autowired
	FarmerRepo frepo;
	
	public List<Farmer> getFarmer()
	{
		return frepo.findAll();
	}
	
	public Farmer saveFarmer(Farmer f)
	{
		return frepo.save(f);
	}
}
