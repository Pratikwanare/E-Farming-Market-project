package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.services.ProductService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ProductController {

	@Autowired
	ProductService ps;
	
	@GetMapping("/getproducts")
	public List<Product> getProducts()
	{
		return ps.getProducts();
	}
	
	@GetMapping("/getproductsbycid")
	public List<Product> getProductsByCat(@RequestParam("cid") int cid)
	{
		return ps.getProductsByCat(cid);
	}
	
//	@GetMapping("/getproductsbycid/{cid}")
//	public List<Product> getProductsByCat(@PathVariable int cid)
//	{
//		return ps.getProductsByCat(cid);
//	}
	
	@PostMapping("/addproduct")
	public Product addProduct(@RequestBody Product p)
	{
		//System.out.println(p);
		return ps.addProduct(p);
	}
	
}
