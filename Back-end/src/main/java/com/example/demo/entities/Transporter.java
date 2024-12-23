package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="transporters")
public class Transporter {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int tid;
	public String company_name;
	public String contact;
	public String email;
	public byte[] license_image;
	
	public Transporter() {
		super();
	}

	public Transporter(String company_name, String contact, String email, byte[] license_image) {
		super();
		this.company_name = company_name;
		this.contact = contact;
		this.email = email;
		this.license_image = license_image;
	}

	public Transporter(String company_name, String contact, String email) {
		super();
		this.company_name = company_name;
		this.contact = contact;
		this.email = email;
	}

	public int getTid() {
		return tid;
	}

	public void setTid(int tid) {
		this.tid = tid;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public byte[] getLicense_image() {
		return license_image;
	}

	public void setLicense_image(byte[] license_image) {
		this.license_image = license_image;
	}
	
}
