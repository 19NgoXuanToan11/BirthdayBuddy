package com.swp.birthdaybuddy.BirthdayBuddy.converter;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.Party;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class PartyConverter {
    private final ModelMapper modelMapper;

    public PartyConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public PartyDTO convertToDTO(Party party) {
        return modelMapper.map(party, PartyDTO.class);
    }

    public Party convertToEntity(PartyDTO partyDTO) {
        return modelMapper.map(partyDTO, Party.class);
    }
}
