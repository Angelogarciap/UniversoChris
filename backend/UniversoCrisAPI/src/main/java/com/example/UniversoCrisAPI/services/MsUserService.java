package com.example.UniversoCrisAPI.services;

import com.example.UniversoCrisAPI.Vo.UserVO;
import com.example.UniversoCrisAPI.converter.DozerConverter;
import com.example.UniversoCrisAPI.entities.User;
import com.example.UniversoCrisAPI.exception.ResourceNotFoundException;
import com.example.UniversoCrisAPI.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MsUserService {
  @Autowired
  UserRepository userRepository;

  public UserVO findById(Long id) {
    var entity = userRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
    return DozerConverter.parseObject(entity, UserVO.class);
  }

  public UserVO create(UserVO user){
    var entity = DozerConverter.parseObject(user, User.class);
    var vo = DozerConverter.parseObject(userRepository.save(entity), UserVO.class);
    return vo;
  }

  public UserVO update(UserVO user){
    var entity = userRepository.findById(user.getKey())
      .orElseThrow(() -> new ResourceNotFoundException(("No records found for this Id")));

    var vo = DozerConverter.parseObject(userRepository.save(entity), UserVO.class);
    return vo;
  }

  public void delete(Long id){
    var entity = userRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException(("No records found for this Id")));
    userRepository.delete(entity);
  }
}
