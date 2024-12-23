package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.entities.Farmer_Product;

@Repository
@Transactional
public interface FarmerProductRepo extends JpaRepository<Farmer_Product, Integer> {

	@Query(nativeQuery = true,value="select * from farmers_products where pid in(select pid from products where cid=:cid)")
	public List<Farmer_Product> getFarmerProductsByCid(int cid);	
	
	@Query(nativeQuery = true, value="select * from farmers_products where fid=:fid")
	public List<Farmer_Product> showProductsByFid(int fid);
	
}