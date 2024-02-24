package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;
import lombok.ToString;

import java.util.Set;

@Table(name = "role")
public class Role {

    @Id
    @Column(name = "role_id")
    private int roleId;
    @Column(name = "role_name")
    private String roleName;

    @OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
    @ToString.Exclude
    private Set<User> user;
}
