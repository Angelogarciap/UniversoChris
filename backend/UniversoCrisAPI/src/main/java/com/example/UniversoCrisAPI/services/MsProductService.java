package com.example.UniversoCrisAPI.services;

import com.example.UniversoCrisAPI.Vo.ProductVO;
import com.example.UniversoCrisAPI.Vo.ProductVO;
import com.example.UniversoCrisAPI.converter.DozerConverter;
import com.example.UniversoCrisAPI.entities.Product;
import com.example.UniversoCrisAPI.exception.ResourceNotFoundException;
import com.example.UniversoCrisAPI.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Service
public class MsProductService {
  @Autowired
  ProductRepository productRepository;

  public ProductVO findById(Long id) {
    var entity = productRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
    return DozerConverter.parseObject(entity, ProductVO.class);
  }

  public ProductVO create(ProductVO product){
    var entity = DozerConverter.parseObject(product, Product.class);
    var vo = DozerConverter.parseObject(productRepository.save(entity), ProductVO.class);
    return vo;
  }

  public ProductVO update(ProductVO product){
    var entity = productRepository.findById(product.getKey())
      .orElseThrow(() -> new ResourceNotFoundException(("No records found for this Id")));

    var vo = DozerConverter.parseObject(productRepository.save(entity), ProductVO.class);
    return vo;
  }

  public void delete(Long id){
    var entity = productRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(("No records found for this Id")));
    productRepository.delete(entity);
  }

  public List<Product> findAll() {
    return productRepository.findAll();
  }

  private ProductVO convertToProductVO(Product entity) {
    return DozerConverter.parseObject(entity, ProductVO.class);
  }
}
