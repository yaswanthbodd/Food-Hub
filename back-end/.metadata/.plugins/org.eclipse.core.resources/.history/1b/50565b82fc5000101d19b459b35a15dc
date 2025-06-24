package com.foodhub.service;

import java.util.List;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.foodhub.model.Item;
import com.foodhub.repository.ItemRepo;

@Service
public class ItemService {
	
	@Autowired
	private ItemRepo repo;
	
	// Add the Item 
	public Item addItem(Item item,MultipartFile imageFile) throws IOException {
		item.setImageName(imageFile.getOriginalFilename());
		item.setImageType(imageFile.getContentType());
		item.setImageData(imageFile.getBytes());
		return repo.save(item);
	}
	
	//Get all the item details
	public List<Item> getAllItems(){
		return repo.findAll();
	}
	
	//Get item details by Id
	public Item getItemById(int id) {
		Item item = repo.findById(id).orElse(null);
		return item;
	}
	
	//Delete the item
	public void deleteItem(int id) {
		repo.deleteById(id);
	}
}
