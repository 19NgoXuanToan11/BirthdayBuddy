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

    private final PartyPackageRepository partyPackageRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public PartyPackageServiceImpl(PartyPackageRepository partyPackageRepository, ModelMapper modelMapper) {
        this.partyPackageRepository = partyPackageRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PartyPackageDTO createPartyPackage(PartyPackageDTO partyPackageDTO) {
        PartyPackage partyPackage = modelMapper.map(partyPackageDTO, PartyPackage.class);
        PartyPackage savedPartyPackage = partyPackageRepository.save(partyPackage);
        return modelMapper.map(savedPartyPackage, PartyPackageDTO.class);
    }

    @Override
    public PartyPackageDTO getPartyPackage(Long id) {
        PartyPackage partyPackage = partyPackageRepository.findById(id).orElse(null);
        return partyPackage != null ? modelMapper.map(partyPackage, PartyPackageDTO.class) : null;
    }

    @Override
    public List<PartyPackageDTO> getAllPartyPackages() {
        List<PartyPackage> partyPackages = partyPackageRepository.findAll();
        return partyPackages.stream()
                .map(partyPackage -> modelMapper.map(partyPackage, PartyPackageDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public PartyPackageDTO updatePartyPackage(Long id, PartyPackageDTO partyPackageDTO) {
        PartyPackage partyPackageToUpdate = partyPackageRepository.findById(id).orElse(null);
        if (partyPackageToUpdate != null) {
            modelMapper.map(partyPackageDTO, partyPackageToUpdate);
            PartyPackage updatedPartyPackage = partyPackageRepository.save(partyPackageToUpdate);
            return modelMapper.map(updatedPartyPackage, PartyPackageDTO.class);
        }
        return null;
    }

    @Override
    public void deletePartyPackage(Long id) {
        partyPackageRepository.deleteById(id);
    }
}
