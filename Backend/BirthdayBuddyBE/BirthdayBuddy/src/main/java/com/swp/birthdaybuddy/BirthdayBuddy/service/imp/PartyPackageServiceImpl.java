// com.swp.birthdaybuddy.BirthdayBuddy.service.impl.PartyPackageServiceImpl
package com.swp.birthdaybuddy.BirthdayBuddy.service.imp;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyPackageDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.PartyPackage;
import com.swp.birthdaybuddy.BirthdayBuddy.repository.PartyPackageRepository;
import com.swp.birthdaybuddy.BirthdayBuddy.service.PartyPackageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PartyPackageServiceImpl implements PartyPackageService {

    @Autowired
    private PartyPackageRepository partyPackageRepository;

    @Autowired
    private ModelMapper modelMapper; // Assuming you have configured ModelMapper

    @Override
    public PartyPackageDTO createParty(PartyPackageDTO partyPackageDTO) {
        PartyPackage partyPackage = modelMapper.map(partyPackageDTO, PartyPackage.class);
        PartyPackage savedPartyPackage = partyPackageRepository.save(partyPackage);
        return modelMapper.map(savedPartyPackage, PartyPackageDTO.class);
    }

    @Override
    public void deleteParty(Long partyPackageId) {
        partyPackageRepository.deleteById(partyPackageId);
    }

    @Override
    public PartyPackageDTO updateParty(Long partyPackageId, PartyPackageDTO updatedPartyPackageDTO) {
        PartyPackage partyPackage = partyPackageRepository.findById(partyPackageId)
                .orElseThrow(() -> new RuntimeException("Party Package not found with id: " + partyPackageId));

        // Update partyPackage properties based on updatedPartyPackageDTO

        PartyPackage updatedPartyPackage = partyPackageRepository.save(partyPackage);
        return modelMapper.map(updatedPartyPackage, PartyPackageDTO.class);
    }

    @Override
    public PartyPackageDTO getParty(Long partyPackageId) {
        PartyPackage partyPackage = partyPackageRepository.findById(partyPackageId)
                .orElseThrow(() -> new RuntimeException("Party Package not found with id: " + partyPackageId));

        return modelMapper.map(partyPackage, PartyPackageDTO.class);
    }

    @Override
    public List<PartyPackageDTO> getAllParties() {
        List<PartyPackage> partyPackages = partyPackageRepository.findAll();
        return partyPackages.stream()
                .map(partyPackage -> modelMapper.map(partyPackage, PartyPackageDTO.class))
                .collect(Collectors.toList());
    }
}
