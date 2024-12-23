package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="farmers_products")
public class Farmer_Product{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fp_id;
	private float price;
	private String description;
	private int stock;
	private byte[] image;

	@ManyToOne
	@JsonIgnoreProperties("farmer_product")
	@JoinColumn(name="fid")
	@Cascade(CascadeType.ALL)
	private Farmer farmer;
	
	@ManyToOne
	@JsonIgnoreProperties("farmer_product")
	@JoinColumn(name="pid")
	@Cascade(CascadeType.ALL)
	private Product product;

	public Farmer_Product() {
		super();
	}
	
	public Farmer_Product(float price, String description, int stock, Farmer farmer, Product product) {
		super();
		this.price = price;
		this.description = description;
		this.stock = stock;
		this.farmer = farmer;
		this.product = product;
	}
	
	public Farmer_Product(float price, String description, int stock, byte[] image, Farmer farmer, Product product) {
		super();
		this.price = price;
		this.description = description;
		this.stock = stock;
		this.image = image;
		this.farmer = farmer;
		this.product = product;
	}



	public int getFp_id() {
		return fp_id;
	}

	public void setFp_id(int fp_id) {
		this.fp_id = fp_id;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Farmer getFarmer() {
		return farmer;
	}

	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}
	
}
