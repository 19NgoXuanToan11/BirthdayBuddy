package com.swp.birthdaybuddy.BirthdayBuddy.repository;

import com.swp.birthdaybuddy.BirthdayBuddy.model.RestaurantDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RestaurantDetailsRepository extends JpaRepository<RestaurantDetails, Long> {
    Optional<RestaurantDetails> findByRestaurantId(Long restaurantId);
}
