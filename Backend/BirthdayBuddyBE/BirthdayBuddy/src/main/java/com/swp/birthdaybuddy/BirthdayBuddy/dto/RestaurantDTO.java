package com.swp.birthdaybuddy.BirthdayBuddy.dto;

public class RestaurantDTO {
    private Long id;
    private String restaurantName;
    private String address;

    public RestaurantDTO() {
    }

    public RestaurantDTO(Long id, String restaurantName, String address) {
        this.id = id;
        this.restaurantName = restaurantName;
        this.address = address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
