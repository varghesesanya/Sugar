package com.example.demo22.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo22.models.Product;
import com.example.demo22.repositories.Product_Repo;
import com.example.demo22.repositories.User_Repo;


@Controller
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
public class Product_Controller {
	
	@Autowired
	private Product_Repo productrepository;
	
	@PostMapping(path="/add") // Map ONLY POST Requests
	public @ResponseBody String addNewProduct (@RequestParam String name
			, @RequestParam String desc) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		Product p = new Product();
		p.setProduct_name(name);
		p.setProduct_desc(desc);
		p.setScore();
		productrepository.save(p);
		return "Saved";
	}
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<Product> getAllProducts()
	{
		return productrepository.findAll();
	}

	@GetMapping(path = "/dealsoftheday")
	public @ResponseBody List<Product> returnTop()
	{
		return productrepository.orderByScore();
	}

	@GetMapping(path="/searchp")
	public @ResponseBody List<Product> searchProducts(String key)
	{
		return productrepository.findByNameOrDesc(key);
	}

}
