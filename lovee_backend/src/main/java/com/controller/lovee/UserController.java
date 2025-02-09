package com.controller.lovee;

import com.entity.lovee.UserEntity;
import com.repository.lovee.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public void createUser(@RequestBody UserEntity user) {
        userRepository.save(user);
    }
}
