// RestaurantTypeController.java
package com.swp.birthdaybuddy.BirthdayBuddy.controller;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.RestaurantTypeDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.service.RestaurantTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
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
