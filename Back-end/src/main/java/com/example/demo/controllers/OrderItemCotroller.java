package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.OrderItem;
import com.example.demo.services.OrderItemService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class OrderItemCotroller {

	@Autowired
	OrderItemService ois;
	
	@GetMapping("/getorderitemsbyoid")
	public List<OrderItem> getAllOrderItemsByOid(@RequestParam("oid") int oid)
	{
		return ois.getAllOrderItemsByOid(oid);
	}
}
