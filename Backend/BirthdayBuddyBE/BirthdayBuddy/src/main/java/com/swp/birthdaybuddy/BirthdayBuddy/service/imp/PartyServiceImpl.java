package com.swp.birthdaybuddy.BirthdayBuddy.service.imp;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.Party;
import com.swp.birthdaybuddy.BirthdayBuddy.repository.PartyRepository;
import com.swp.birthdaybuddy.BirthdayBuddy.service.PartyService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

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
}
