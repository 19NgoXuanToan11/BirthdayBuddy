package com.swp.birthdaybuddy.BirthdayBuddy.service;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyPackageDTO;

import java.util.List;

public interface PartyPackageService {
    PartyPackageDTO createParty(PartyPackageDTO partyPackageDTO);
    PartyPackageDTO getParty(Long id);
    List<PartyPackageDTO> getAllParties();
    PartyPackageDTO updateParty(Long id, PartyPackageDTO partyPackageDTO);
    void deleteParty(Long id);
}
