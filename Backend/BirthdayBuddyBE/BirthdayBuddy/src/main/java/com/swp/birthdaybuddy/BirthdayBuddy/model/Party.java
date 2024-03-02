package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "party")
public class Party {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long partyID;

    @Column(name = "restaurant_id")
    private Long restaurantID;

    @Column(name = "district_id")
    private Long districtID;

    private String partyTheme;

    @Column(name = "number_of_guest")
    private int numberOfGuest;

    private double price;

    @Column(name = "host_id")
    private Long hostID;

    private String status;

    @Column(name = "booking_date")
    private Date bookingDate;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "available_date")
    private Date availableDate;

    private String description;

    @Column(name = "slot_id")
    private Long slotID;

    // Getters and setters

    public Party() {
    }

    public Party(Long partyID, Long restaurantID, Long districtID, String partyTheme, int numberOfGuest, double price, Long hostID, String status, Date bookingDate, Date startDate, Date availableDate, String description, Long slotID) {
        this.partyID = partyID;
        this.restaurantID = restaurantID;
        this.districtID = districtID;
        this.partyTheme = partyTheme;
        this.numberOfGuest = numberOfGuest;
        this.price = price;
        this.hostID = hostID;
        this.status = status;
        this.bookingDate = bookingDate;
        this.startDate = startDate;
        this.availableDate = availableDate;
        this.description = description;
        this.slotID = slotID;
    }

    public Long getPartyID() {
        return partyID;
    }

    public void setPartyID(Long partyID) {
        this.partyID = partyID;
    }

    public Long getRestaurantID() {
        return restaurantID;
    }

    public void setRestaurantID(Long restaurantID) {
        this.restaurantID = restaurantID;
    }

    public Long getDistrictID() {
        return districtID;
    }

    public void setDistrictID(Long districtID) {
        this.districtID = districtID;
    }

    public String getPartyTheme() {
        return partyTheme;
    }

    public void setPartyTheme(String partyTheme) {
        this.partyTheme = partyTheme;
    }

    public int getNumberOfGuest() {
        return numberOfGuest;
    }

    public void setNumberOfGuest(int numberOfGuest) {
        this.numberOfGuest = numberOfGuest;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Long getHostID() {
        return hostID;
    }

    public void setHostID(Long hostID) {
        this.hostID = hostID;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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

    public Date getAvailableDate() {
        return availableDate;
    }

    public void setAvailableDate(Date availableDate) {
        this.availableDate = availableDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getSlotID() {
        return slotID;
    }

    public void setSlotID(Long slotID) {
        this.slotID = slotID;
    }
}

