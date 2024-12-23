package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Order;
import com.example.demo.services.OrderService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class OrderController {

	@Autowired
	OrderService os;
	
	@GetMapping("/getordersbywid")
	public List<Order> getAllOrdersByWid(@RequestParam("wid") int wid)
	{
		return os.getAllOrdersByWid(wid);
	}
}
