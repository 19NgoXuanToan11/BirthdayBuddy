package com.swp.birthdaybuddy.BirthdayBuddy.controller;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.service.PartyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/parties")
public class PartyController {

    private final PartyService partyService;

    @Autowired
    public PartyController(PartyService partyService) {
        this.partyService = partyService;
    }

    @PostMapping("/create")
    public PartyDTO createParty(@RequestBody PartyDTO partyDTO) {
        return partyService.createParty(partyDTO);
    }

    @GetMapping("/{id}")
    public PartyDTO getPartyById(@PathVariable Long id) {
        return partyService.getPartyById(id);
    }

    @PutMapping("/{id}")
    public void updateParty(@PathVariable Long id, @RequestBody PartyDTO partyDTO) {
        partyService.updateParty(id, partyDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteParty(@PathVariable Long id) {
        partyService.deleteParty(id);
    }
    @GetMapping("/all")
    public List<PartyDTO> getAllParties() {
        return partyService.getAllParties();
    }
}
