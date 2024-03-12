package com.swp.birthdaybuddy.BirthdayBuddy.service.imp;

import com.swp.birthdaybuddy.BirthdayBuddy.converter.PartyConverter;
import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.model.Party;
import com.swp.birthdaybuddy.BirthdayBuddy.model.Restaurant;
import com.swp.birthdaybuddy.BirthdayBuddy.repository.PartyRepository;
import com.swp.birthdaybuddy.BirthdayBuddy.repository.RestaurantRepository;
import com.swp.birthdaybuddy.BirthdayBuddy.service.PartyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PartyServiceImpl implements PartyService {

    private final PartyRepository partyRepository;
    private final RestaurantRepository restaurantRepository;
    private final PartyConverter partyConverter;

    @Autowired
    public PartyServiceImpl(PartyRepository partyRepository, RestaurantRepository restaurantRepository, PartyConverter partyConverter) {
        this.partyRepository = partyRepository;
        this.restaurantRepository = restaurantRepository;
        this.partyConverter = partyConverter;
    }

    @Override
    public PartyDTO getPartyById(Long id) {
        Party party = partyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Party not found"));
        return partyConverter.toDTO(party);
    }

    @Override
    public PartyDTO createParty(PartyDTO partyDTO) {
        // Retrieve restaurant details from database using restaurantId in partyDTO
        Restaurant restaurant = restaurantRepository.findById(partyDTO.getRestaurantId())
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));

        // Create a new Party entity and set partyTheme and specialService from the restaurant
        Party party = partyConverter.toEntity(partyDTO);
        party.setPartyTheme(restaurant.getPartyTheme());
        party.setSpecialService(restaurant.getSpecialService());

        // Save the party entity
        Party savedParty = partyRepository.save(party);

        // Convert and return the saved party as DTO
        return partyConverter.toDTO(savedParty);
    }

    @Override
    public PartyDTO updateParty(Long id, PartyDTO partyDTO) {
        Party existingParty = partyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Party not found"));

        // Update party details
        Party updatedParty = partyConverter.toEntity(partyDTO);
        updatedParty.setId(id); // Ensure that the ID is set to the correct value

        // Save the updated party
        updatedParty = partyRepository.save(updatedParty);

        // Convert and return the updated party as DTO
        return partyConverter.toDTO(updatedParty);
    }

    @Override
    public void deleteParty(Long id) {
        partyRepository.deleteById(id);
    }

    @Override
    public List<PartyDTO> getAllParties() {
        List<Party> parties = partyRepository.findAll();
        return parties.stream()
                .map(partyConverter::toDTO)
                .collect(Collectors.toList());
    }
}
