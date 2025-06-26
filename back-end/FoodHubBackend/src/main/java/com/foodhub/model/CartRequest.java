package com.foodhub.model;

import lombok.Data;

@Data
public class CartRequest {
	private int itemId;
	private int quantity;
}
