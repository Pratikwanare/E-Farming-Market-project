package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order;
import com.example.demo.repositories.OrderRepo;

@Service
public class OrderService {

	@Autowired
	OrderRepo orepo;
	
	public List<Order> getAllOrdersByWid(int wid)
	{
		return orepo.getAllOrdersByWid(wid);
	}
	
}
