package com.swp.birthdaybuddy.BirthdayBuddy.dto;

import java.math.BigDecimal;

public class PartyPackageDTO {
    private Long id;
    private Long roleId; // Assuming you want to transfer roleId instead of the entire Role object
    private BigDecimal price;
    private String status;
    private String description;

    public PartyPackageDTO() {
    }

    public PartyPackageDTO(Long id, Long roleId, BigDecimal price, String status, String description) {
        this.id = id;
        this.roleId = roleId;
        this.price = price;
        this.status = status;
        this.description = description;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
