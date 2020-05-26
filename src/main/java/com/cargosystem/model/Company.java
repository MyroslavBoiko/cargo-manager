package com.cargosystem.model;

import com.cargosystem.model.user.Driver;
import com.cargosystem.model.user.Manager;

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
    @JoinColumn(name="company_id")
    private Set<Driver> drivers;

    @OneToMany
    @JoinColumn(name="company_id")
    private Set<Cargo> cargoList;

    @OneToMany
    @JoinColumn(name="company_id")
    private Set<PurchaseOrder> purchaseOrders;

    public Company() {
    }

    public Company(Long id, String name, Set<Driver> drivers) {
        this.id = id;
        this.name = name;
        this.drivers = drivers;
    }
}
