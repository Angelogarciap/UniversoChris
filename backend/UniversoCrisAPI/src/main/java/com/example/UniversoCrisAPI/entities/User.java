package com.example.UniversoCrisAPI.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "msUsers")
@Entity
public class User implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;
  @Column(name = "name",  nullable = false)
  private String name;
  @Column(name = "lastName",  nullable = false)
  private String LastName;
  @Column(name = "phoneNumber")
  private String phoneNumber;
  @Column(name = "password",  nullable = false)
  private String password;
}
