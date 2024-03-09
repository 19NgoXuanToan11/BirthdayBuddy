package com.swp.birthdaybuddy.BirthdayBuddy.service;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyDTO;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PartyService {
    List<PartyDTO> getAllParty();

    PartyDTO createParty(PartyDTO partyDTO);
    void deleteParty(Long partyID);
    PartyDTO getParty(Long partyID);
    List<PartyDTO> getAllParties();
}
