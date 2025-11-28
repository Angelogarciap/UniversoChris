package com.example.UniversoCrisAPI.entities.entitieValues;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Embeddable
public class Address {
    private String street;
    private String number;
    private String complement;
    private String neighborhood;
    private String city;
    private String state;
    private String country;
    private String zipCode;

    //Because the store only works locally in Manaus,
    //the constructor automatically adjust itself
    //there. If the business grows further, remove this
    //constructor and add a '@AllArgsConstructor'
    //lombok annotation to this class instead.
    public Address(String street,
                   String number,
                   String complement,
                   String neighborhood,
                   String zipCode) {
        this.street = street;
        this.number = number;
        this.complement = complement;
        this.neighborhood = neighborhood;
        this.city = "Manaus";
        this.state = "Amazonas";
        this.country = "Brazil";
        this.zipCode = zipCode;
    }
}
