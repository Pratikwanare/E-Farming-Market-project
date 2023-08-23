package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="wholesalers")
public class Wholesaler {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int wid;
	private String pincode,area,city,pan_no,aadhar_no;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date bdate;
	private byte status;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "uid")
	User user;
	
	public Wholesaler() {
		super();
	}

	public Wholesaler(String pincode, String area, String city, String pan_no, String aadhar_no, Date bdate,
			byte status, User user) {
		super();
		this.pincode = pincode;
		this.area = area;
		this.city = city;
		this.pan_no = pan_no;
		this.aadhar_no = aadhar_no;
		this.bdate = bdate;
		this.status = status;
		this.user = user;
	}

	public int getWid() {
		return wid;
	}

	public void setWid(int wid) {
		this.wid = wid;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPan_no() {
		return pan_no;
	}

	public void setPan_no(String pan_no) {
		this.pan_no = pan_no;
	}

	public String getAadhar_no() {
		return aadhar_no;
	}

	public void setAadhar_no(String aadhar_no) {
		this.aadhar_no = aadhar_no;
	}

	public Date getBdate() {
		return bdate;
	}

	public void setBdate(Date bdate) {
		this.bdate = bdate;
	}

	public byte getStatus() {
		return status;
	}

	public void setStatus(byte status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
