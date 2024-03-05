package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalTime;

@Entity
@Table(name = "PartyPackage_Details")
public class PartyPackageDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "partyPackageDetailID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "partyID")
    private Party party;

    @ManyToOne
    @JoinColumn(name = "packageID")
    private PartyPackage partyPackage;

    @Column(name = "totalPrice")
    private BigDecimal totalPrice;

    @Column(name = "timeStart")
    private LocalTime timeStart;

    public PartyPackageDetail() {
    }

    public PartyPackageDetail(Long id, Party party, PartyPackage partyPackage, BigDecimal totalPrice, LocalTime timeStart) {
        this.id = id;
        this.party = party;
        this.partyPackage = partyPackage;
        this.totalPrice = totalPrice;
        this.timeStart = timeStart;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Party getParty() {
        return party;
    }

    public void setParty(Party party) {
        this.party = party;
    }

    public PartyPackage getPartyPackage() {
        return partyPackage;
    }

    public void setPartyPackage(PartyPackage partyPackage) {
        this.partyPackage = partyPackage;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public LocalTime getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(LocalTime timeStart) {
        this.timeStart = timeStart;
    }
}
