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
	
	public Wholesaler saveWholesaler(Wholesaler w)
	{
		return wrepo.save(w);
	}
	
}
