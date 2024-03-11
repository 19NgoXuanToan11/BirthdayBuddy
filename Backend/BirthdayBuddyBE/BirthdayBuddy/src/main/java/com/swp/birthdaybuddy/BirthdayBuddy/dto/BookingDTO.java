package com.swp.birthdaybuddy.BirthdayBuddy.dto;

import java.util.Date;

public class BookingDTO {
    private Long bookingId;
    private Long partyId;
    private Long userId;
    private Date bookingDate;

    public BookingDTO() {
    }

    public BookingDTO(Long bookingId, Long partyId, Long userId, Date bookingDate) {
        this.bookingId = bookingId;
        this.partyId = partyId;
        this.userId = userId;
        this.bookingDate = bookingDate;
    }

    public Long getBookingId() {
        return bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public Long getPartyId() {
        return partyId;
    }

    public void setPartyId(Long partyId) {
        this.partyId = partyId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }
}
