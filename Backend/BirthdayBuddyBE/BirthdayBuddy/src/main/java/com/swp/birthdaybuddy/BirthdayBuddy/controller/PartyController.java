package com.swp.birthdaybuddy.BirthdayBuddy.controller;

import com.swp.birthdaybuddy.BirthdayBuddy.converter.PartyConverter;
import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.service.PartyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/parties")
public class PartyController {
    private final PartyService partyService;
    private final PartyConverter partyConverter;

    public PartyController(PartyService partyService, PartyConverter partyConverter) {
        this.partyService = partyService;
        this.partyConverter = partyConverter;
    }

    @PostMapping("/create")
    public ResponseEntity<PartyDTO> createParty(@RequestBody PartyDTO partyDTO) {
        PartyDTO createdPartyDTO = partyService.createParty(partyDTO);
        return new ResponseEntity<>(createdPartyDTO, HttpStatus.CREATED);
    }

    @DeleteMapping("/{partyID}")
    public ResponseEntity<Void> deleteParty(@PathVariable Long partyID) {
        partyService.deleteParty(partyID);
        return ResponseEntity.noContent().build();
    }
}
