package com.swp.birthdaybuddy.BirthdayBuddy.service;

import com.swp.birthdaybuddy.BirthdayBuddy.Auth.LoginRequest;
import com.swp.birthdaybuddy.BirthdayBuddy.Auth.RegisterRequest;
import com.swp.birthdaybuddy.BirthdayBuddy.dto.UserDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.User;
import org.springframework.stereotype.Service;
import com.swp.birthdaybuddy.BirthdayBuddy.dto.UserDTO;

import java.util.List;
public interface UserService {
    UserDTO createUser(UserDTO userDTO);
    UserDTO getUser(Long userId);

    List<UserDTO> getAllUsers();

    boolean login(String username, String password);

    void deleteUser(Long userId);

    UserDTO updateUser(Long userId, UserDTO updatedUserDTO);
}
