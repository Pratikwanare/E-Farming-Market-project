package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.RegisterValid;
import com.example.demo.entities.Wholesaler;
import com.example.demo.services.WholesalerService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class WholesalerController {

	@Autowired
	WholesalerService ws;
	
	@GetMapping("/getallwholesalers")
	public List<Wholesaler> getAllWholesaler()
	{
		return ws.getWholesaler();
	}
	
	@PostMapping("/registerwholesaler")
	public Wholesaler saveWholesaler(@RequestBody Wholesaler w)
	{
		return ws.saveWholesaler(w);
	}
	
}