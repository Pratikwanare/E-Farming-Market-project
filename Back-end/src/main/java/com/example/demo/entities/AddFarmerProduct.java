package com.example.demo.entities;

public class AddFarmerProduct {

	private int fid,pid,stock;
	private float price;
	private String description;
	private byte[] image;
	
	public AddFarmerProduct() {
		super();
	}

	public AddFarmerProduct(int fid, int pid, int stock, float price, String description) {
		super();
		this.fid = fid;
		this.pid = pid;
		this.stock = stock;
		this.price = price;
		this.description = description;
	}
	
	public AddFarmerProduct(int fid, int pid, int stock, float price, String description, byte[] image) {
		super();
		this.fid = fid;
		this.pid = pid;
		this.stock = stock;
		this.price = price;
		this.description = description;
		this.image = image;
	}

	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
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

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}
		
}
