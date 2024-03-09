package com.swp.birthdaybuddy.BirthdayBuddy.dto;

public class RestaurantDTO {
    private Long restaurantID;
    private String restaurantName;
    private String address;

    public RestaurantDTO() {
    }

    public RestaurantDTO(Long restaurantID, String restaurantName, String address) {
        this.restaurantID = restaurantID;
        this.restaurantName = restaurantName;
        this.address = address;
    }

    public Long getRestaurantID() {
        return restaurantID;
    }

    public void setRestaurantID(Long restaurantID) {
        this.restaurantID = restaurantID;
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
