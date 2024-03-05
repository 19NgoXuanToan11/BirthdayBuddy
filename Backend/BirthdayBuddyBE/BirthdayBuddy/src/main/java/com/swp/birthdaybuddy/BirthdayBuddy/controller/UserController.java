package com.swp.birthdaybuddy.BirthdayBuddy.controller;

import com.swp.birthdaybuddy.BirthdayBuddy.converter.UserConverter;
import com.swp.birthdaybuddy.BirthdayBuddy.dto.UserDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    UserConverter userConverter;


    //Đăng ký user
    @PostMapping("/register")
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        UserDTO createdUserDTO = userService.createUser(userDTO);
        return new ResponseEntity<>(createdUserDTO, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestParam String username, @RequestParam String password) {
        if (userService.login(username, password)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
