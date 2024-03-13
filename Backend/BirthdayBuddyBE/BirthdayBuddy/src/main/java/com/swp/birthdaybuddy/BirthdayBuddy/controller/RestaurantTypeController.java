package com.swp.birthdaybuddy.BirthdayBuddy.controller;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.RestaurantTypeDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.service.RestaurantTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/restaurantTypes")
public class RestaurantTypeController {

    private final RestaurantTypeService restaurantTypeService;

    @Autowired
    public RestaurantTypeController(RestaurantTypeService restaurantTypeService) {
        this.restaurantTypeService = restaurantTypeService;
    }

    @GetMapping("/{id}")
    public RestaurantTypeDTO getRestaurantTypeById(@PathVariable Long id) {
        return restaurantTypeService.getRestaurantTypeById(id);
    }
}
