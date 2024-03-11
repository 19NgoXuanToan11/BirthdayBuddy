package com.swp.birthdaybuddy.BirthdayBuddy.service.imp;

import com.swp.birthdaybuddy.BirthdayBuddy.converter.BookingConverter;
import com.swp.birthdaybuddy.BirthdayBuddy.dto.BookingDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.Booking;
import com.swp.birthdaybuddy.BirthdayBuddy.repository.BookingRepository;
import com.swp.birthdaybuddy.BirthdayBuddy.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    private final BookingConverter bookingConverter;

    @Autowired
    public BookingServiceImpl(BookingRepository bookingRepository, BookingConverter bookingConverter) {
        this.bookingRepository = bookingRepository;
        this.bookingConverter = bookingConverter;
    }

    @Override
    public BookingDTO bookingParty(BookingDTO bookingDTO) {
        Booking booking = bookingConverter.dtoToEntity(bookingDTO);
        // Perform any necessary business logic
        booking = bookingRepository.save(booking);
        return bookingConverter.entityToDto(booking);
    }
}
