package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Districts")
public class District {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "districtID")
    private Long id;

    @Column(name = "districtName", nullable = false, unique = true)
    private String districtName;

    public District() {
    }

    public District(Long id, String districtName) {
        this.id = id;
        this.districtName = districtName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDistrictName() {
        return districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName;
    }
}
