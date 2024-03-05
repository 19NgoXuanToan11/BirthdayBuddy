package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Slots")
public class Slot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "slotID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "partyID")
    private Party party;

    @Column(name = "startDate")
    private Date startDate;

    @Column(name = "endDate")
    private Date endDate;

    @Column(name = "availableGuests")
    private Integer availableGuests;

    @Column(name = "status", length = 50)
    private String status;

    public Slot() {
    }

    public Slot(Long id, Party party, Date startDate, Date endDate, Integer availableGuests, String status) {
        this.id = id;
        this.party = party;
        this.startDate = startDate;
        this.endDate = endDate;
        this.availableGuests = availableGuests;
        this.status = status;
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Integer getAvailableGuests() {
        return availableGuests;
    }

    public void setAvailableGuests(Integer availableGuests) {
        this.availableGuests = availableGuests;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
