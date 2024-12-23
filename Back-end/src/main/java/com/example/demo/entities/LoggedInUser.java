package com.example.demo.entities;

public class LoggedInUser {

	private String type;
	private int uid;
	
	public LoggedInUser(String type, int uid) {
		super();
		this.type = type;
		this.uid = uid;
	}
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	
}
