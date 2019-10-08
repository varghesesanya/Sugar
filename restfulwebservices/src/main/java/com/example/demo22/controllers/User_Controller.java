package com.example.demo22.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo22.models.Product;
import com.example.demo22.models.User;
import com.example.demo22.repositories.Product_Repo;
import com.example.demo22.repositories.User_Repo;

@Controller
@RequestMapping(path="user/")
public class User_Controller {
	
	@Autowired
	private User_Repo userrepository;
	
	@PostMapping(path="/register") // Map ONLY POST Requests
	public @ResponseBody String addNewUser (@RequestParam String username
			, @RequestParam String password, @RequestParam String passwordconfirm) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		User u = new User();
		u.setUsername(username);
		u.setPassword(password);
		u.setPasswordConfirm(passwordconfirm);
		userrepository.save(u);
		return "Saved";
	}
	// ALLOW REGISTER AND AUTO LOGIN
	// LOGIN PAGE TOO
	
}
