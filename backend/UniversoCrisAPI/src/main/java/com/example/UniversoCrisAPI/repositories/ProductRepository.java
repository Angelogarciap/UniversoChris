package com.example.UniversoCrisAPI.repositories;

import com.example.UniversoCrisAPI.entities.Payment;
import com.example.UniversoCrisAPI.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
