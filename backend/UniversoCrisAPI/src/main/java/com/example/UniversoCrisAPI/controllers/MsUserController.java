package com.example.UniversoCrisAPI.controllers;

import com.example.UniversoCrisAPI.Vo.UserVO;
import com.example.UniversoCrisAPI.services.MsUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@RestController
@RequestMapping("/UniversoCrisApi/v1/user")
public class MsUserController {
  @Autowired
  private MsUserService userService;

  @GetMapping("/{id}")
  private UserVO findById(@PathVariable("id") Long id) {
    UserVO userVO = userService.findById(id);
    userVO.add(linkTo(WebMvcLinkBuilder.methodOn(MsUserController.class).findById(id)).withSelfRel());
    return userVO;
  }
  @PostMapping
  public UserVO create(@RequestBody UserVO user){
    UserVO userVO = userService.create(user);
    userVO.add(linkTo(WebMvcLinkBuilder.methodOn(MsUserController.class).findById(userVO.getKey())).withSelfRel());
    return userVO;
  }

  @PutMapping(value = "/{id}")
  public UserVO update(@RequestBody UserVO user) {
    UserVO userVo = userService.update(user);
    userVo.add(linkTo(WebMvcLinkBuilder.methodOn(MsUserController.class).findById(userVo.getKey())).withSelfRel());
    return userVo;
  }
  @DeleteMapping("/{id}")
  public ResponseEntity<?> delete(@PathVariable("id") Long id) {
    userService.delete(id);
    return ResponseEntity.ok().build();
  }
}
