package com.foodhub.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	//Many Items belongs to one cart
	@ManyToOne
	@JoinColumn(name = "cart_id")
	private Cart cart;
	
	//Item being Added
	@ManyToOne
	@JoinColumn(name = "item_id")
	private Item item;
	
	private int quantity;
}
