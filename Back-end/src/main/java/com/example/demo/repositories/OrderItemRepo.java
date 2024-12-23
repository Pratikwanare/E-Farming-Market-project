package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.OrderItem;

@Repository
@Transactional
public interface OrderItemRepo extends JpaRepository<OrderItem, Integer> {

	@Query(nativeQuery = true, value="select * from order_items where oid=:oid")
	public List<OrderItem> getAllOrderItemsByOid(int oid);
}
