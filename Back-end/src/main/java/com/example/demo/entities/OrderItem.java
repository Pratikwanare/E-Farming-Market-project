package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;


@Entity
@Table(name="order_items")
public class OrderItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int oi_id;
	private int qty;
	private Date delivery_date;
	private Integer rating;
	private String review;
	private byte status;
	
	@ManyToOne
	@JoinColumn(name="oid")
	@Cascade(CascadeType.ALL)
	private Order order;
	
	@ManyToOne
	@JoinColumn(name="fp_id")
	@Cascade(CascadeType.ALL)
	private Farmer_Product farmer_Product;
	
	@ManyToOne
	@JoinColumn(name="tid")
	@Cascade(CascadeType.ALL)
	private Transporter transporter;
	
	public OrderItem() {
		super();
	}
	
	public OrderItem(int qty, Date delivery_date, Integer rating, String review, byte status, Order order,
			Farmer_Product farmer_Product, Transporter transporter) {
		super();
		this.qty = qty;
		this.delivery_date = delivery_date;
		this.rating = rating;
		this.review = review;
		this.status = status;
		this.order = order;
		this.farmer_Product = farmer_Product;
		this.transporter = transporter;
	}

	public OrderItem(int qty, Date delivery_date, String review, byte status, Order order,
			Farmer_Product farmer_Product, Transporter transporter) {
		super();
		this.qty = qty;
		this.delivery_date = delivery_date;
		this.review = review;
		this.status = status;
		this.order = order;
		this.farmer_Product = farmer_Product;
		this.transporter = transporter;
	}

	public OrderItem(int qty, Date delivery_date, Integer rating, byte status, Order order, Farmer_Product farmer_Product,
			Transporter transporter) {
		super();
		this.qty = qty;
		this.delivery_date = delivery_date;
		this.rating = rating;
		this.status = status;
		this.order = order;
		this.farmer_Product = farmer_Product;
		this.transporter = transporter;
	}

	public OrderItem(int qty, Date delivery_date, byte status, Order order, Farmer_Product farmer_Product,
			Transporter transporter) {
		super();
		this.qty = qty;
		this.delivery_date = delivery_date;
		this.status = status;
		this.order = order;
		this.farmer_Product = farmer_Product;
		this.transporter = transporter;
	}

	public int getOi_id() {
		return oi_id;
	}

	public void setOi_id(int oi_id) {
		this.oi_id = oi_id;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public Date getDelivery_date() {
		return delivery_date;
	}

	public void setDelivery_date(Date delivery_date) {
		this.delivery_date = delivery_date;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public byte getStatus() {
		return status;
	}

	public void setStatus(byte status) {
		this.status = status;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
	
	public Farmer_Product getFarmer_Product() {
		return farmer_Product;
	}

	public void setFarmer_Product(Farmer_Product farmer_Product) {
		this.farmer_Product = farmer_Product;
	}

	public Transporter getTransporter() {
		return transporter;
	}

	public void setTransporter(Transporter transporter) {
		this.transporter = transporter;
	}
		
}
