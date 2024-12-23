package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.entities.Farmer;

@Repository
@Transactional
public interface FarmerRepo extends JpaRepository<Farmer,Integer> {

	@Query(value="select * from farmers f where f.uid=:uid",nativeQuery = true)
	public Farmer getFarmerByUid(int uid);
	
}
