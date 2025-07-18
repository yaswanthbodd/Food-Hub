package com.foodhub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.foodhub.model.Item;
import com.foodhub.service.ItemService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class ItemController {
	
	@Autowired
	private ItemService service;
	
		
	@PostMapping("/item")
	public ResponseEntity<?> addItem(@RequestPart("item") String itemJson, @RequestPart("imageFile") MultipartFile imageFile){
		try {
			ObjectMapper objectMapper = new ObjectMapper();
			Item item = objectMapper.readValue(itemJson, Item.class);
			Item item1 = service.addItem(item, imageFile);
			return new ResponseEntity<>(item1,HttpStatus.CREATED);
		}catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// Get the All Items
	@GetMapping("/items")
	public ResponseEntity<List<Item>> getAllItems() {
		return new ResponseEntity<>(service.getAllItems(), HttpStatus.OK);
	}
	
	// Get the Image 
	@GetMapping("/item/{id}/image")
	public ResponseEntity<byte[]> getImageByItemId(@PathVariable int id){
		Item item = service.getItemById(id);
		byte[] imageFile = item.getImageData();
		return ResponseEntity.ok().contentType(MediaType.valueOf(item.getImageType())).body(imageFile);
	}
	
	//Deleted the Item
	@DeleteMapping("/item/{id}")
	public ResponseEntity<String> deleteItem(@PathVariable int id){
		Item item = service.getItemById(id);
		if(item!=null) {
			service.deleteItem(id);
			return new ResponseEntity<>("Deleted",HttpStatus.OK);
		}
		return new ResponseEntity<>("Item Not Found", HttpStatus.NOT_FOUND);
	}
	
	//Get the list of items based on the Category
	@GetMapping("/items/category/{category}")
	public ResponseEntity<List<Item>> getItemsByCategory(@PathVariable String category){
		List<Item> items = service.getItemByCategory(category);
		if(items.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(items, HttpStatus.OK);
	}
}
