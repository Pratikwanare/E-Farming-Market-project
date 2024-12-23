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
@Table(name="orders")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int oid;
	private Date order_date;
	private float total_price;
	private boolean status;
	
	@ManyToOne
	@JoinColumn(name="wid")
	@Cascade(CascadeType.MERGE)
	private Wholesaler wholesaler;

	public Order() {
		super();
	}

	public Order(Date order_date, float total_price, boolean status, Wholesaler wholesaler) {
		super();
		this.order_date = order_date;
		this.total_price = total_price;
		this.status = status;
		this.wholesaler = wholesaler;
	}

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	public Date getOrder_date() {
		return order_date;
	}

	public void setOrder_date(Date order_date) {
		this.order_date = order_date;
	}

	public float getTotal_price() {
		return total_price;
	}

	public void setTotal_price(float total_price) {
		this.total_price = total_price;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Wholesaler getWholesaler() {
		return wholesaler;
	}

	public void setWholesaler(Wholesaler wholesaler) {
		this.wholesaler = wholesaler;
	}
	
}
