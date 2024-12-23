package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Farmer_Product;
import com.example.demo.repositories.FarmerProductRepo;

@Service
public class FarmerProductService {

	@Autowired
	FarmerProductRepo fprepo;
	
	public List<Farmer_Product> getFarmerProducts()
	{
		return fprepo.findAll();
	}
	
	public Farmer_Product insertFarmerProduct(Farmer_Product fp)
	{
		return fprepo.save(fp);
	}
	
	public List<Farmer_Product> getFarmerProductsByCid(int cid)
	{
		return fprepo.getFarmerProductsByCid(cid);
	}
	
	public List<Farmer_Product> showProductsByFid(int fid)
	{
		return fprepo.showProductsByFid(fid);
	}
		
}
