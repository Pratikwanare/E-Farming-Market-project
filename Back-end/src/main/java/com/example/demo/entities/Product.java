package com.example.demo.entities;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	private String name;
	
	@ManyToOne
	@JoinColumn(name="cid")
	@Cascade(CascadeType.MERGE)
	private Category category;
	
//	@OneToMany(mappedBy = "product")
//	@JsonIgnoreProperties("product")
//	@Cascade(CascadeType.ALL)
//	Set<Farmer_Product> farmer_product;
	
	public Product() {
		super();
	}
	
	public Product(String name, Category category) {
		super();
		this.name = name;
		this.category = category;
	}
	
	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
	
}
