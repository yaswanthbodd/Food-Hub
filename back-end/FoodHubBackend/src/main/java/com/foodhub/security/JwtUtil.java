package com.foodhub.security;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
	private static final String SECRET_KEY = "your-very-secure-secret-key-of-32-characters!";
    private final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
	
	public String generateToken(UserDetails userDetails) {
		return Jwts.builder()
				.setSubject(userDetails.getUsername())
				.claim("roles", userDetails.getAuthorities())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1hr
				.signWith(key)
				.compact();
	}
	
	public String extractUsername(String token) {
		return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getSubject();
	}
	
	public boolean validateToken(String token, UserDetails userDetails) {
		return extractUsername(token).equals(userDetails.getUsername()) && !isTokenExpired(token);
	}
	
	public boolean isTokenExpired(String token) {
		return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getExpiration().before(new Date());
	}
}
