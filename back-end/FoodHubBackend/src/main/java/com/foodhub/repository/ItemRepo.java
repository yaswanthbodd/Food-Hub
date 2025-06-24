package com.foodhub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodhub.model.Item;

@Repository
public interface ItemRepo extends JpaRepository<Item, Integer> {
	
	// Get the list of data based on the product category
	List<Item> findByProductCategory(String productType);
}
