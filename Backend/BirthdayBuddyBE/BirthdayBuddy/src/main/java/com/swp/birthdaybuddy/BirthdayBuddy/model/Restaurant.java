package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Restaurants")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurantID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "districtID")
    private District district;

    @Column(name = "restaurantName", nullable = false)
    private String restaurantName;

    @Column(name = "address")
    private String address;

    public Restaurant() {
    }

    public Restaurant(Long id, District district, String restaurantName, String address) {
        this.id = id;
        this.district = district;
        this.restaurantName = restaurantName;
        this.address = address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public District getDistrict() {
        return district;
    }

    public void setDistrict(District district) {
        this.district = district;
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
