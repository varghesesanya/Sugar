package com.example.demo22.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;



@Entity // This tells Hibernate to make a table out of this class
public class Product extends BaseProduct {

	@ManyToOne
	@JoinColumn
	private Brand brand;

	@OneToOne
	private ProductAmazon productAmazon;

	@OneToOne
	private ProductFlipkart productFlipkart;

	@OneToOne
	private ProductSnapdeal productSnapdeal;

	public void setPassword(String password) {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public double calcScore()
	{
		return Math.max(productAmazon.getScore(),Math.max(productFlipkart.getScore(),productSnapdeal.getScore()));
	}


}