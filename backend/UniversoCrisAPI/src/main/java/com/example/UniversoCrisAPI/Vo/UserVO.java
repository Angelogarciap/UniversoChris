package com.example.UniversoCrisAPI.Vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.github.dozermapper.core.Mapping;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.hateoas.RepresentationModel;

import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserVO extends RepresentationModel<PaymentVO> implements Serializable {
  private static final long serialVersionUID = 1L;


  @Mapping
  @JsonProperty("id")
  private Long key;
  private Long name;
  private String password;
}
