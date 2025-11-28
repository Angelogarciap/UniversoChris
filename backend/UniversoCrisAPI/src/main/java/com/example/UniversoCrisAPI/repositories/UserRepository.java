package com.example.UniversoCrisAPI.repositories;

import com.example.UniversoCrisAPI.entities.Payment;
import com.example.UniversoCrisAPI.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
