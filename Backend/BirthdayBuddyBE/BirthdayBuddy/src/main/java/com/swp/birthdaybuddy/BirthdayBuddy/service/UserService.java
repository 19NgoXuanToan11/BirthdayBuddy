package com.swp.birthdaybuddy.BirthdayBuddy.service;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.UserDTO;

public interface UserService {
    UserDTO createUser(UserDTO userDTO);
    boolean login(String username, String password);
}
