package com.swp.birthdaybuddy.BirthdayBuddy.model;

import jakarta.persistence.*;
import lombok.ToString;

import java.util.Set;
@Entity
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

    public Role() {
    }

    public Role(int roleId, String roleName, Set<User> user) {
        this.roleId = roleId;
        this.roleName = roleName;
        this.user = user;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Set<User> getUser() {
        return user;
    }

    public void setUser(Set<User> user) {
        this.user = user;
    }
}
