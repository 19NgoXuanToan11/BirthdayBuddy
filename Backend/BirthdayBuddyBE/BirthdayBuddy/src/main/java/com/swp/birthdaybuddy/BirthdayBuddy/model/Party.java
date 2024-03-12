package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "Parties")
public class Party {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "partyID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "restaurantID")
    private Restaurant restaurant;

    @Column
    private String parentName;
    @Column
    private String phone;
    @Column
    private String kidName;
    @Column
    private String gender;

    @Column(name = "partyTheme")
    private String partyTheme;

    @Column
    private String specialService;

    @Column
    private String menu;

    @Column(name = "numberOfGuests")
    private Integer numberOfGuests;

    @Column(name = "bookingDate")
    private Date bookingDate;

    @Column(name = "startDate")
    private Date startDate;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;
    @Column
    private Integer totalPrice;
    @Column
    private String status;

    public Party() {
    }

    public Party(Long id, Restaurant restaurant, String parentName, String phone, String kidName, String gender, String partyTheme, String specialService, String menu, Integer numberOfGuests, Date bookingDate, Date startDate, String description, Integer totalPrice, String status) {
        this.id = id;
        this.restaurant = restaurant;
        this.parentName = parentName;
        this.phone = phone;
        this.kidName = kidName;
        this.gender = gender;
        this.partyTheme = partyTheme;
        this.specialService = specialService;
        this.menu = menu;
        this.numberOfGuests = numberOfGuests;
        this.bookingDate = bookingDate;
        this.startDate = startDate;
        this.description = description;
        this.totalPrice = totalPrice;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public String getParentName() {
        return parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getKidName() {
        return kidName;
    }

    public void setKidName(String kidName) {
        this.kidName = kidName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
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

    public String getMenu() {
        return menu;
    }

    public void setMenu(String menu) {
        this.menu = menu;
    }

    public Integer getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(Integer numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

