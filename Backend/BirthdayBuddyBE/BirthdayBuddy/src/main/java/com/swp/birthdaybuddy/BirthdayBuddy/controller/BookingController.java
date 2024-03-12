package com.swp.birthdaybuddy.BirthdayBuddy.controller;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.BookingDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/party")
    public BookingDTO bookingParty(@RequestBody BookingDTO bookingDTO) {
        return bookingService.bookingParty(bookingDTO);
    }
}
