package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;
import java.time.LocalTime;


@Entity
@Table(name = "Restaurants")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurantID")
    private Long id;

    @Column(name = "restaurantName", nullable = false)
    private String restaurantName;
    @Column
    private String phone;
    @Column
    private LocalTime startDate;
    @Column
    private LocalTime endDate;
    @ManyToOne
    @JoinColumn(name = "typeID")
    private RestaurantType restaurantType;
    @Column
    private String partyTheme;
    @Column
    private String specialService;

    @Column(name = "address")
    private String address;

    @ManyToOne
    @JoinColumn(name = "userID") // Change to userID
    private User user; // Change to User
    @OneToOne(mappedBy = "restaurant", cascade = CascadeType.ALL)
    private RestaurantDetails restaurantDetails;

    public Restaurant() {
    }

    public Restaurant(Long id, String restaurantName, String phone, LocalTime startDate, LocalTime endDate, RestaurantType restaurantType, String partyTheme, String specialService, String address, User user, RestaurantDetails restaurantDetails) {
        this.id = id;
        this.restaurantName = restaurantName;
        this.phone = phone;
        this.startDate = startDate;
        this.endDate = endDate;
        this.restaurantType = restaurantType;
        this.partyTheme = partyTheme;
        this.specialService = specialService;
        this.address = address;
        this.user = user;
        this.restaurantDetails = restaurantDetails;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalTime startDate) {
        this.startDate = startDate;
    }

    public LocalTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalTime endDate) {
        this.endDate = endDate;
    }

    public RestaurantType getRestaurantType() {
        return restaurantType;
    }

    public void setRestaurantType(RestaurantType restaurantType) {
        this.restaurantType = restaurantType;
    }

    public String getPartyTheme() {
        return partyTheme;
    }

    public void setPartyTheme(String partyTheme) {
        this.partyTheme = partyTheme;
    }

    public String getSpecialService() {
        return specialService;
    }

    public void setSpecialService(String specialService) {
        this.specialService = specialService;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public RestaurantDetails getRestaurantDetails() {
        return restaurantDetails;
    }

    public void setRestaurantDetails(RestaurantDetails restaurantDetails) {
        this.restaurantDetails = restaurantDetails;
    }
}
