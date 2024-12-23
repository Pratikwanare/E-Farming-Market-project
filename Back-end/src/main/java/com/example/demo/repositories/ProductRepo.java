package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.entities.Product;

@Repository
@Transactional
public interface ProductRepo extends JpaRepository<Product, Integer> {

	@Query(value ="select * from products p where p.cid=:cid", nativeQuery = true)
	public List<Product> getProductsByCat(int cid);
	
}
