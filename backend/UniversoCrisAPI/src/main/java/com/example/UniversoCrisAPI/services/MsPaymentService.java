package com.example.UniversoCrisAPI.services;

import com.example.UniversoCrisAPI.Vo.PaymentVO;
import com.example.UniversoCrisAPI.converter.DozerConverter;
import com.example.UniversoCrisAPI.entities.Payment;
import com.example.UniversoCrisAPI.exception.ResourceNotFoundException;
import com.example.UniversoCrisAPI.repositories.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MsPaymentService {

    @Autowired
    PaymentRepository paymentRepository;

    public PaymentVO findById(Long id) {
        var entity = paymentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
        return DozerConverter.parseObject(entity, PaymentVO.class);
    }

    public PaymentVO create(PaymentVO payment){
        var entity = DozerConverter.parseObject(payment, Payment.class);
        var vo = DozerConverter.parseObject(paymentRepository.save(entity), PaymentVO.class);
        return vo;
    }

    public PaymentVO update(PaymentVO payment){
        var entity = paymentRepository.findById(payment.getKey())
                .orElseThrow(() -> new ResourceNotFoundException(("No records found for this Id")));

        //add updated data for payment

        entity.setCpf(payment.getCpf());
        entity.setName(payment.getName());
        entity.setPhoneNumber(payment.getPhoneNumber());
        entity.setPaymentMethod(payment.getPaymentMethod());
        entity.setTotalPriceAmount(payment.getTotalPriceAmount());
        entity.setTransactionDateAndTime(payment.getTransactionDateAndTime());
        entity.setAddress(payment.getAddress());
        entity.setDiscount(payment.getDiscount());

        var vo = DozerConverter.parseObject(paymentRepository.save(entity), PaymentVO.class);
        return vo;
    }

}
