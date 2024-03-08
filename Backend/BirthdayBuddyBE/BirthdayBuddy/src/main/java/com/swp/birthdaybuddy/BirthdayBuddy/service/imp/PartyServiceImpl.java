package com.swp.birthdaybuddy.BirthdayBuddy.service.imp;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.Party;
import com.swp.birthdaybuddy.BirthdayBuddy.repository.PartyRepository;
import com.swp.birthdaybuddy.BirthdayBuddy.service.PartyService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PartyServiceImpl implements PartyService {
    private final PartyRepository partyRepository;
    private final ModelMapper modelMapper;

    public PartyServiceImpl(PartyRepository partyRepository, ModelMapper modelMapper) {
        this.partyRepository = partyRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PartyDTO createParty(PartyDTO partyDTO) {
        Party party = modelMapper.map(partyDTO, Party.class);
        return modelMapper.map(partyRepository.save(party), PartyDTO.class);
    }

    @Override
    public void deleteParty(Long partyID) {
        partyRepository.deleteById(partyID);
    }
    @Override
    public PartyDTO getParty(Long partyID){
        PartyDTO res = new PartyDTO();
        res.setPartyID(1L);
        res.setRestaurantID(1L);
        res.setPartyTheme("Black");
        res.setDescription("Test");
        res.setAvailableDate(new Date());
        res.setNumberOfGuest(10);
        res.setPrice(1000);
        res.setBookingDate(new Date());
        res.setHostID(1L);
        res.setStatus("Offline");
        res.setStartDate(new Date());
        return res;
    }
}
