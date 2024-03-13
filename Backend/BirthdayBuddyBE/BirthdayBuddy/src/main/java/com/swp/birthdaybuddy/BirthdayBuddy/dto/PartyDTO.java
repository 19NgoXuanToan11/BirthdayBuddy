package com.swp.birthdaybuddy.BirthdayBuddy.dto;

import com.swp.birthdaybuddy.BirthdayBuddy.model.Restaurant;

import java.time.LocalTime;
import java.util.Date;

public class PartyDTO {
    private Long id;
    private Long restaurantId;
    private String parentName;
    private String phone;
    private String kidName;
    private String gender;
    private Integer age;
    private String partyTheme;
    private String specialService;
    private String menu;
    private Integer numberOfGuests;
    private Date bookingDate;
    private String startTime;
    private String description;
    private Integer totalPrice;

    // Constructors, getters, and setters...

    public PartyDTO() {
    }

    public PartyDTO(Long id, Long restaurantId, String parentName, String phone, String kidName, String gender, Integer age, String partyTheme, String specialService, String menu, Integer numberOfGuests, Date bookingDate, String startTime, String description, Integer totalPrice) {
        this.id = id;
        this.restaurantId = restaurantId;
        this.parentName = parentName;
        this.phone = phone;
        this.kidName = kidName;
        this.gender = gender;
        this.age = age;
        this.partyTheme = partyTheme;
        this.specialService = specialService;
        this.menu = menu;
        this.numberOfGuests = numberOfGuests;
        this.bookingDate = bookingDate;
        this.startTime = startTime;
        this.description = description;
        this.totalPrice = totalPrice;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(Long restaurantId) {
        this.restaurantId = restaurantId;
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

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
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

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
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
}
