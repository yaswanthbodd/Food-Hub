package com.foodhub.service;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.foodhub.model.User;
import com.foodhub.repository.UserRepo;

@Service
public class UserService implements UserDetailsService {
	
	@Autowired
	private UserRepo userRepo;
	
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepo.findByEmail(email).orElseThrow(()-> new UsernameNotFoundException("User not found with email: "+email));
		return new org.springframework.security.core.userdetails.
				User(user.getEmail(), user.getPassword(), Collections.singleton(new SimpleGrantedAuthority("ROLE_"+ user.getRole())));
	}
}
