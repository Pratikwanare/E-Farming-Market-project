package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.Order;

@Repository
@Transactional
public interface OrderRepo extends JpaRepository<Order, Integer> {

	@Query(nativeQuery = true, value="select * from orders where wid=:wid")
	public List<Order> getAllOrdersByWid(int wid);
}
