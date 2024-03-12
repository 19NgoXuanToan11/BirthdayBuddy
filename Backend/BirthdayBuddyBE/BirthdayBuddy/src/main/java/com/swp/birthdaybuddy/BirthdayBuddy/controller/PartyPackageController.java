// PartyPackageController.java
package com.swp.birthdaybuddy.BirthdayBuddy.controller;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyPackageDTO;
import com.swp.birthdaybuddy.BirthdayBuddy.service.PartyPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/party-packages")
public class PartyPackageController {

    private final PartyPackageService partyPackageService;

    @Autowired
    public PartyPackageController(PartyPackageService partyPackageService) {
        this.partyPackageService = partyPackageService;
    }

    @PostMapping
    public ResponseEntity<PartyPackageDTO> createPartyPackage(@RequestBody PartyPackageDTO partyPackageDTO) {
        PartyPackageDTO createdPartyPackage = partyPackageService.createPartyPackage(partyPackageDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPartyPackage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PartyPackageDTO> getPartyPackage(@PathVariable Long id) {
        PartyPackageDTO partyPackageDTO = partyPackageService.getPartyPackage(id);
        return partyPackageDTO != null ?
                ResponseEntity.ok(partyPackageDTO) :
                ResponseEntity.notFound().build();
    }

    @GetMapping
    public ResponseEntity<List<PartyPackageDTO>> getAllPartyPackages() {
        List<PartyPackageDTO> partyPackages = partyPackageService.getAllPartyPackages();
        return ResponseEntity.ok(partyPackages);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PartyPackageDTO> updatePartyPackage(@PathVariable Long id, @RequestBody PartyPackageDTO partyPackageDTO) {
        PartyPackageDTO updatedPartyPackage = partyPackageService.updatePartyPackage(id, partyPackageDTO);
        return updatedPartyPackage != null ?
                ResponseEntity.ok(updatedPartyPackage) :
                ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePartyPackage(@PathVariable Long id) {
        partyPackageService.deletePartyPackage(id);
        return ResponseEntity.noContent().build();
    }
}
