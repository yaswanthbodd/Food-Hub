package com.foodhub.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table( name = "fooditem")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String productName;
    private String productDescription;
    private String productCategory;
    private String productType;
    private double productPrice;
    private double productRating;
	
	// Image Storing
	private String imageName;
	private String imageType;
	@Lob
	private byte[] imageData;
}
