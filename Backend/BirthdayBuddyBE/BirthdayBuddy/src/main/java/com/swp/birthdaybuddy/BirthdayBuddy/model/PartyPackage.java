package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "PartyPackages")
public class PartyPackage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "packageID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "roleID")
    private Role role;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "status", length = 50)
    private String status;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    public PartyPackage() {
    }

    public PartyPackage(Long id, Role role, BigDecimal price, String status, String description) {
        this.id = id;
        this.role = role;
        this.price = price;
        this.status = status;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
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
