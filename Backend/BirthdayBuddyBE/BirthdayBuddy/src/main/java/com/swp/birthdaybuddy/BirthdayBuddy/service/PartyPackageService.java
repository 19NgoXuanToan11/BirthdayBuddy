// com.swp.birthdaybuddy.BirthdayBuddy.service.PartyPackageService
package com.swp.birthdaybuddy.BirthdayBuddy.service;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyPackageDTO;

import java.util.List;

public interface PartyPackageService {
    PartyPackageDTO createParty(PartyPackageDTO partyPackageDTO);

    void deleteParty(Long partyPackageId);

    PartyPackageDTO updateParty(Long partyPackageId, PartyPackageDTO updatedPartyPackageDTO);

    PartyPackageDTO getParty(Long partyPackageId);

    List<PartyPackageDTO> getAllParties();
}
