package com.example.demo.services;

import java.util.List;
import java.util.Optional;

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
	
	public Farmer getFarmerById(int fid)
	{
		Optional<Farmer> fo=frepo.findById(fid);
		Farmer f=null;
		if(fo!=null)
		{
			f=fo.get();
		}
		return f;
	}
	
	public Farmer getFarmerByUid(int uid)
	{
		return frepo.getFarmerByUid(uid);
	}
}
