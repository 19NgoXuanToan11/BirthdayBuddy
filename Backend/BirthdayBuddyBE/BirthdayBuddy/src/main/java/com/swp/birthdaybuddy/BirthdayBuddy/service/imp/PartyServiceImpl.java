package com.swp.birthdaybuddy.BirthdayBuddy.service.imp;

import com.swp.birthdaybuddy.BirthdayBuddy.converter.PartyConverter;
import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.Party;
import com.swp.birthdaybuddy.BirthdayBuddy.repository.PartyRepository;
import com.swp.birthdaybuddy.BirthdayBuddy.service.PartyService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PartyServiceImpl implements PartyService {
    private final PartyRepository partyRepository;
    private final ModelMapper modelMapper;
    private final PartyConverter partyConverter;

    public PartyServiceImpl(PartyRepository partyRepository, ModelMapper modelMapper, PartyConverter partyConverter) {
        this.partyRepository = partyRepository;
        this.modelMapper = modelMapper;
        this.partyConverter = partyConverter;
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
    public PartyDTO getParty(Long partyId) {
        Party party = partyRepository.findById(partyId).orElse(null);
        return partyConverter.toDTO(party);
    }

    @Override
    public List<PartyDTO> getAllParties() {
        List<Party> parties = partyRepository.findAll();
        return parties.stream()
                .map(partyConverter::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PartyDTO updateParty(Long partyID, PartyDTO partyDTO) {
        // Check if the party exists
        Party existingParty = partyRepository.findById(partyID).orElseThrow(() -> new RuntimeException("Party not found with id: " + partyID));

        // Update the party details
        existingParty.setPartyTheme(partyDTO.getPartyTheme());
        existingParty.setNumberOfGuests(partyDTO.getNumberOfGuest());
        existingParty.setPrice(BigDecimal.valueOf(partyDTO.getPrice()));
        existingParty.setBookingDate(partyDTO.getBookingDate());
        existingParty.setStartDate(partyDTO.getStartDate());
        existingParty.setAvailableDate(partyDTO.getAvailableDate());
        existingParty.setDescription(partyDTO.getDescription());

        // Save the updated party
        Party updatedParty = partyRepository.save(existingParty);

        // Convert the updated party to DTO and return
        return partyConverter.toDTO(updatedParty);
    }

}
