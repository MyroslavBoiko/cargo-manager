package com.cargosystem.model;

import com.cargosystem.model.user.Customer;
import com.cargosystem.model.user.Driver;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class PurchaseOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String address;

    @OneToOne(cascade = CascadeType.PERSIST)
    private Cargo cargo;

    @ManyToOne
    private Driver driver;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private Customer customer;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JsonIgnore
    private Company company;

    @ManyToOne
    private Status status;

    public PurchaseOrder() {
    }

    public PurchaseOrder(Long id, String address, Cargo cargo, Driver driver,
                         Customer customer, Company company, Status status) {
        this.id = id;
        this.address = address;
        this.cargo = cargo;
        this.driver = driver;
        this.customer = customer;
        this.company = company;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cargo getCargo() {
        return cargo;
    }

    public void setCargo(Cargo cargo) {
        this.cargo = cargo;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
