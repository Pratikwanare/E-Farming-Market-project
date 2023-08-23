package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.RegisterValid;
import com.example.demo.entities.User;
import com.example.demo.entities.Wholesaler;
import com.example.demo.repositories.WholesalerRepo;

@Service
public class WholesalerService {

	@Autowired
	WholesalerRepo wrepo;
	
	public List<Wholesaler> getWholesaler()
	{
		return wrepo.findAll();
	}
	
	public RegisterValid saveWholesaler(Wholesaler w)
	{
		Wholesaler wh= wrepo.save(w);
		RegisterValid rv=new RegisterValid();
		rv.setAadhar_no(wh.getAadhar_no());
		rv.setArea(wh.getArea());
		rv.setBdate(wh.getBdate());
		rv.setCity(wh.getCity());
		rv.setPan_no(wh.getPan_no());
		rv.setPincode(wh.getPincode());
		rv.setUser(wh.getUser());
		
		return rv;
	}
	
}
