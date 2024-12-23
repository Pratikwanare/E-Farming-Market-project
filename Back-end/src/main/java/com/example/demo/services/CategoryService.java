package com.example.demo.services;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Category;
import com.example.demo.entities.Product;
import com.example.demo.repositories.CategoryRepo;

@Service
public class CategoryService {

	@Autowired
	CategoryRepo crepo;
	
	public List<Category> getCategories()
	{
		return crepo.findAll();
	}
	
//	public Set<Product> getProductsByCat(int cid)
//	{
//		Optional<Category> c=crepo.findById(cid);
//		Category cs=c.get();
////		Set<Product> ps=cs.getProducts();
//		return ps;
//	}

	public Category addCategory(Category c)
	{
		return crepo.save(c);
	}
	
}
