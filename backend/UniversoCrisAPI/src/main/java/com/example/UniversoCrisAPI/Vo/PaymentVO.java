package com.example.UniversoCrisAPI.Vo;

import com.example.UniversoCrisAPI.entities.entitieValues.Address;
import com.example.UniversoCrisAPI.enums.PaymentMethod;
import com.example.UniversoCrisAPI.enums.PaymentStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.github.dozermapper.core.Mapping;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.hateoas.RepresentationModel;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonPropertyOrder({ "id", "cpf", "name", "gender", "birthdate", "email"})
public class PaymentVO extends RepresentationModel<PaymentVO> implements Serializable {

    private static final long serialVersionUID = 1L;

    @Mapping
    @JsonProperty("id")
    private Long key;
    private String cpf;
    private String name;
    private String surname;
    private BigDecimal totalPriceAmount;
    private BigDecimal discount;
    private LocalDateTime transactionDateAndTime;
    private String phoneNumber;
    private PaymentMethod paymentMethod;
    private PaymentStatus paymentStatus;
    private Address address;


}
