package com.example.UniversoCrisAPI.repositories;

import com.example.UniversoCrisAPI.entities.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long>{
}
