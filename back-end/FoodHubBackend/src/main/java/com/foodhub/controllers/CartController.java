package com.foodhub.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodhub.model.CartRequest;
import com.foodhub.service.CartService;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:5173")

public class CartController {
	
	@Autowired
	private CartService cartService;
	
	@PostMapping("/add")
	public String addToCart(@RequestBody CartRequest request) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		cartService.addToCart(email, request.getItemId(), request.getQuantity());
		return "Item added to cart";	
	}
	
}
