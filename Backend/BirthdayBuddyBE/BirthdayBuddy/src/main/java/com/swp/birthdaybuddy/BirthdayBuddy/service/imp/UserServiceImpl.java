package com.swp.birthdaybuddy.BirthdayBuddy.service.imp;

import com.swp.birthdaybuddy.BirthdayBuddy.model.User;
import com.swp.birthdaybuddy.BirthdayBuddy.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}
