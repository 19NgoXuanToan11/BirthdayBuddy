package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;

@Entity
@Table(name = "restaurant_types")
public class RestaurantType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "typeID")
    private Long typeId;

    @Column(name = "typeName", nullable = false)
    private String typeName;

    // Constructors, getters, and setters
}

