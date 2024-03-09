package com.swp.birthdaybuddy.BirthdayBuddy.converter;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.UserDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {

    @Autowired
    private ModelMapper modelMapper;

    public UserDTO toDTO(User user) {
        return modelMapper.map(user, UserDTO.class);
    }

    public User toEntity(UserDTO userDTO) {
        return modelMapper.map(userDTO, User.class);
    }


    public UserDTO convertToDto(User user) {
        return toDTO(user);
    }

    public User convertToEntity(UserDTO userDTO) {
        return toEntity(userDTO);
    }
}
