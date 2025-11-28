package com.example.UniversoCrisAPI.controllers;

import com.example.UniversoCrisAPI.Vo.ProductVO;
import com.example.UniversoCrisAPI.entities.Product;
import com.example.UniversoCrisAPI.services.MsPaymentService;
import com.example.UniversoCrisAPI.services.MsProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.hateoas.PagedModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@RestController
@RequestMapping("/UniversoCrisApi/v1/product")
public class MsProductController {
  @Autowired
  private MsProductService productService;

  @GetMapping("/{id}")
  private ProductVO findById(@PathVariable("id") Long id) {
    ProductVO productVO = productService.findById(id);
    productVO.add(linkTo(WebMvcLinkBuilder.methodOn(MsProductController.class).findById(id)).withSelfRel());
    return productVO;
  }

  @GetMapping(value = "/products")
  public List<Product> findAll() {
    List<Product> products = productService.findAll();
    return products;
  }

  @PostMapping
  public ProductVO create(@RequestBody ProductVO product){
    ProductVO productVO = productService.create(product);
    productVO.add(linkTo(WebMvcLinkBuilder.methodOn(MsProductController.class).findById(productVO.getKey())).withSelfRel());
    return productVO;
  }

  @PutMapping(value = "/{id}")
  public ProductVO update(@RequestBody ProductVO payment) {
    ProductVO productVo = productService.update(payment);
    productVo.add(linkTo(WebMvcLinkBuilder.methodOn(MsProductController.class).findById(productVo.getKey())).withSelfRel());
    return productVo;
  }
  @DeleteMapping("/{id}")
  public ResponseEntity<?> delete(@PathVariable("id") Long id) {
    productService.delete(id);
    return ResponseEntity.ok().build();
  }
}
