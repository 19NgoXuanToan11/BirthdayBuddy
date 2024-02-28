package com.swp.birthdaybuddy.BirthdayBuddy.service;

import com.swp.birthdaybuddy.BirthdayBuddy.Auth.LoginRequest;
import com.swp.birthdaybuddy.BirthdayBuddy.Auth.RegisterRequest;
import com.swp.birthdaybuddy.BirthdayBuddy.dto.UserDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    void register(RegisterRequest request);
    User login(LoginRequest request);
}
