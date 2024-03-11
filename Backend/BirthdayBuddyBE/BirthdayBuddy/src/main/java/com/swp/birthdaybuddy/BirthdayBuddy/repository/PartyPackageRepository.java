package com.swp.birthdaybuddy.BirthdayBuddy.repository;

import com.swp.birthdaybuddy.BirthdayBuddy.model.PartyPackage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartyPackageRepository extends JpaRepository<PartyPackage, Long> {
    // You can add custom query methods if needed
    // For example, find party packages by a specific role
    // List<PartyPackage> findByRole(Role role);
}
