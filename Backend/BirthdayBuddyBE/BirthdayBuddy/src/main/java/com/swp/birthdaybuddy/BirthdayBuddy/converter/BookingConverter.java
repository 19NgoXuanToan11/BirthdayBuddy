package com.swp.birthdaybuddy.BirthdayBuddy.converter;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.BookingDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.Booking;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BookingConverter {

    private final ModelMapper modelMapper;

    @Autowired
    public BookingConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public BookingDTO entityToDto(Booking booking) {
        return modelMapper.map(booking, BookingDTO.class);
    }

    public Booking dtoToEntity(BookingDTO bookingDTO) {
        return modelMapper.map(bookingDTO, Booking.class);
    }
}
