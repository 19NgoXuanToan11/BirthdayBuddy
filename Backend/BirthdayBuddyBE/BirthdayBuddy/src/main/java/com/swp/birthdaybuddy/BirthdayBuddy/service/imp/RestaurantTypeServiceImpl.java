package com.swp.birthdaybuddy.BirthdayBuddy.service.imp;

import com.swp.birthdaybuddy.BirthdayBuddy.converter.RestaurantTypeConverter;
import com.swp.birthdaybuddy.BirthdayBuddy.dto.RestaurantTypeDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.repository.RestaurantTypeRepository;
import com.swp.birthdaybuddy.BirthdayBuddy.service.RestaurantTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestaurantTypeServiceImpl implements RestaurantTypeService {

    private final RestaurantTypeRepository restaurantTypeRepository;
    private final RestaurantTypeConverter restaurantTypeConverter;

    @Autowired
    public RestaurantTypeServiceImpl(RestaurantTypeRepository restaurantTypeRepository, RestaurantTypeConverter restaurantTypeConverter) {
        this.restaurantTypeRepository = restaurantTypeRepository;
        this.restaurantTypeConverter = restaurantTypeConverter;
    }

    @Override
    public RestaurantTypeDTO getRestaurantTypeById(Long id) {
        return restaurantTypeConverter.convertToDTO(restaurantTypeRepository.findById(id).orElse(null));
    }
}