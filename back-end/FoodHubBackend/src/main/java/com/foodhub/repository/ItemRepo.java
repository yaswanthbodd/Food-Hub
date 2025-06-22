package com.foodhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodhub.model.Item;

@Repository
public interface ItemRepo extends JpaRepository<Item, Integer> {

}
