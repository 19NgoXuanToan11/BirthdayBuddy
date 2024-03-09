package com.swp.birthdaybuddy.BirthdayBuddy.service.imp;

import com.swp.birthdaybuddy.BirthdayBuddy.converter.UserConverter;
import com.swp.birthdaybuddy.BirthdayBuddy.dto.UserDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.User;
import com.swp.birthdaybuddy.BirthdayBuddy.repository.UserRepository;
import com.swp.birthdaybuddy.BirthdayBuddy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserConverter userConverter;


    @Override
    public UserDTO createUser(UserDTO userDTO) {
        User user = userConverter.toEntity(userDTO);
        userRepository.save(user);
        return userConverter.toDTO(user);
    }

    @Override
    public boolean login(String username, String password) {
        User user = userRepository.findByUserName(username);
        if(user.getPassword().equals(password)){
            return true;
        }
        return false;
    }
}
