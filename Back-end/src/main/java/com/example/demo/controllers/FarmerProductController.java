package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.AddFarmerProduct;
import com.example.demo.entities.Farmer;
import com.example.demo.entities.Farmer_Product;
import com.example.demo.entities.Product;
import com.example.demo.services.FarmerProductService;
import com.example.demo.services.FarmerService;
import com.example.demo.services.ProductService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class FarmerProductController {

	@Autowired
	FarmerProductService fps;
	
	@Autowired
	FarmerService fs;
	
	@Autowired
	ProductService ps;
	
	@GetMapping("/getfarmerproducts")
	public List<Farmer_Product> getFarmerProducts()
	{
		return fps.getFarmerProducts();
	}
	
	@GetMapping("/getfarmerproductsbycid")
	public List<Farmer_Product> getFarmerProductsByCid(@RequestParam("cid") int cid)
	{
		return fps.getFarmerProductsByCid(cid);
	}
	
	@PostMapping("/addfarmerproduct")
	public Farmer_Product saveFarmerProduct(@RequestBody AddFarmerProduct fp)
	{
		Farmer_Product farmpro=new Farmer_Product();
		Farmer f=fs.getFarmerById(fp.getFid());
		Product p=ps.getProductById(fp.getPid());
		farmpro.setFarmer(f);
		farmpro.setProduct(p);
		farmpro.setPrice(fp.getPrice());
		farmpro.setDescription(fp.getDescription());
		farmpro.setStock(fp.getStock());
//		if(fp.getImage()!=null)
//			farmpro.setImage(fp.getImage());
		return fps.insertFarmerProduct(farmpro);
	}
	
	@GetMapping("/showproductsbyfid")
	public List<Farmer_Product> showProductsByFid(@RequestParam("fid") int fid)
	{
		return fps.showProductsByFid(fid);
	}
	
}