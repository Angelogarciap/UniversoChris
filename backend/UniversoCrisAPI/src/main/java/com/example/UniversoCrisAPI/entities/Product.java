package com.example.UniversoCrisAPI.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;


@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name = "msProducts")
public class Product implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String name;
    @Lob
    @Column(name = "description",  nullable = false)
    private String description;
    @Column(name = "price",  nullable = false)
    private BigDecimal price;
    @Column(precision =  10, scale = 2)
    private BigDecimal discount;
    @Column(name = "availableUnits",  nullable = false)
    private int availableUnits;
    @Column(name = "imageUrl",  nullable = false)
    private String imageUrl;


}
