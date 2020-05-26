package com.cargosystem.model;

import com.cargosystem.model.user.Customer;
import com.cargosystem.model.user.Driver;

import javax.persistence.*;

@Entity
public class PurchaseOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Cargo cargo;

    @ManyToOne
    private Driver driver;

    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Company company;


}
