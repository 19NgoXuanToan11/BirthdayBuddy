package com.swp.birthdaybuddy.BirthdayBuddy.service;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.RestaurantDTO;

import java.util.List;

public interface RestaurantService {
    RestaurantDTO getRestaurant(Long restaurantId);
    List<RestaurantDTO> getAllRestaurants();
    RestaurantDTO createRestaurant(RestaurantDTO restaurantDTO);
    RestaurantDTO updateRestaurant(Long id, RestaurantDTO restaurantDTO);
    void deleteRestaurant(Long id);
}
