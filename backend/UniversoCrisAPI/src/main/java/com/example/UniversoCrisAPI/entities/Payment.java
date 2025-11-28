package com.example.UniversoCrisAPI.entities;


import com.example.UniversoCrisAPI.Vo.ProductVO;
import com.example.UniversoCrisAPI.entities.entitieValues.Address;
import com.example.UniversoCrisAPI.enums.PaymentMethod;
import com.example.UniversoCrisAPI.enums.PaymentStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Table(name = "msPayments")
@Entity
public class Payment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Pattern(regexp = "\\d{3}-\\d{3}-\\d{3}\\.\\d{2}",
            message ="Cpf must be on following format (xxx-xxx-xxx.xx)")
    @Column(name = "cpf", unique = true, length = 100)
    private String cpf;

    @Size(min = 2, max = 12, message = "Name must have 2 characters or above")
    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Size(min = 1, max = 50, message = "Surname must have 2 characters or above")
    @Column(name = "surname", nullable = false, length = 100)
    private String surname;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal totalPriceAmount;

    @Column(precision =  10, scale = 2)
    private BigDecimal discount;

    @OneToMany
    @JoinColumn(name = "payment_id")
    private List<Product> productsOnOrder;

    @Embedded
    private Address address;

    @Column(name = "transactionDate", nullable = false)
    private LocalDateTime transactionDateAndTime;


    @Size(min = 11, message = "Number with ddd is required")
    @Column(name = "phoneNumber", nullable = false, length = 20)
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;


}
