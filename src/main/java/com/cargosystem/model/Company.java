package com.cargosystem.model;

import com.cargosystem.model.user.Driver;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany
    @JoinColumn(name = "company_id")
    @JsonIgnore
    private Set<Driver> drivers;

    @OneToMany
    @JoinColumn(name = "company_id")
    @JsonIgnore
    private Set<Cargo> cargoList;

    @OneToMany
    @JoinColumn(name = "company_id")
    @JsonIgnore
    private Set<PurchaseOrder> purchaseOrders;

    public Company() {
    }

    public Company(Long id, String name, Set<Driver> drivers) {
        this.id = id;
        this.name = name;
        this.drivers = drivers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Driver> getDrivers() {
        return drivers;
    }

    public void setDrivers(Set<Driver> drivers) {
        this.drivers = drivers;
    }

    public Set<Cargo> getCargoList() {
        return cargoList;
    }

    public void setCargoList(Set<Cargo> cargoList) {
        this.cargoList = cargoList;
    }

    public Set<PurchaseOrder> getPurchaseOrders() {
        return purchaseOrders;
    }

    public void setPurchaseOrders(Set<PurchaseOrder> purchaseOrders) {
        this.purchaseOrders = purchaseOrders;
    }
}
