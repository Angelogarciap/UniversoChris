package com.example.UniversoCrisAPI.controllers;

import com.example.UniversoCrisAPI.Vo.PaymentVO;
import com.example.UniversoCrisAPI.Vo.PaymentVO;
import com.example.UniversoCrisAPI.services.MsPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@RestController
@RequestMapping("/UniversoCrisApi/v1/payments")
public class MsPaymentController {

    @Autowired
    private MsPaymentService paymentService;

    @GetMapping("/{id}")
    private PaymentVO findById(@PathVariable("id") Long id) {
        PaymentVO paymentVo = paymentService.findById(id);
        paymentVo.add(linkTo(WebMvcLinkBuilder.methodOn(MsPaymentController.class).findById(id)).withSelfRel());
        return paymentVo;
    }


    @PostMapping
    public PaymentVO create(@RequestBody PaymentVO payment){
        PaymentVO paymentVO = paymentService.create(payment);
        paymentVO.add(linkTo(WebMvcLinkBuilder.methodOn(MsPaymentController.class).findById(paymentVO.getKey())).withSelfRel());
        return paymentVO;
    }

  @PutMapping(value = "/{id}")
  public PaymentVO update(@RequestBody PaymentVO payment) {
    PaymentVO paymentVO = paymentService.update(payment);
    paymentVO.add(linkTo(WebMvcLinkBuilder.methodOn(MsPaymentController.class).findById(paymentVO.getKey())).withSelfRel());
    return paymentVO;
  }
}
