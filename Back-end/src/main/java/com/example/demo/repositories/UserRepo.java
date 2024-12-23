package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.LoggedInUser;
import com.example.demo.entities.User;

@Repository
@Transactional
public interface UserRepo extends JpaRepository<User, Integer> {

	@Query("select u from User u where u.email=?1 and u.password=?2")
	public User getUser(String email,String password);
	
}
	