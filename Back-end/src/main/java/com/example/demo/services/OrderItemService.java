package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.OrderItem;
import com.example.demo.repositories.OrderItemRepo;

@Service
public class OrderItemService {

	@Autowired
	OrderItemRepo oirepo;
	
	public List<OrderItem> getAllOrderItemsByOid(int oid)
	{
		return oirepo.getAllOrderItemsByOid(oid);
	}
}
