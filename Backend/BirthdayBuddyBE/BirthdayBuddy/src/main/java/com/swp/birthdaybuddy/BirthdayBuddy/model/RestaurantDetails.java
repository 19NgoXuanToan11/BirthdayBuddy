package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;

@Entity
@Table(name = "RestaurantDetails")
public class RestaurantDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "detailsID")
    private Long id;

    @Column(name = "partyTheme")
    private String partyTheme;

    @Column(name = "specialService")
    private String specialService;
    @OneToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    // You may include additional fields or relationships as needed.

    public RestaurantDetails() {
    }

    public RestaurantDetails(Long id, String partyTheme, String specialService, Restaurant restaurant) {
        this.id = id;
        this.partyTheme = partyTheme;
        this.specialService = specialService;
        this.restaurant = restaurant;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }
}
