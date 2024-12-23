package com.example.demo.controllers;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Category;
import com.example.demo.entities.Product;
import com.example.demo.services.CategoryService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class CategoryController {

	@Autowired
	CategoryService cs;
	
	@GetMapping("/getcategories")
	public List<Category> getCategories()
	{
		return cs.getCategories();
	}
	
	@PostMapping("/addcategory")
	public Category addCategory(@RequestBody Category c)
	{
		return cs.addCategory(c);
	}
	
}
