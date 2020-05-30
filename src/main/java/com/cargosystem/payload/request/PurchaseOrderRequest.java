package com.cargosystem.payload.request;

import com.cargosystem.model.Status;

import java.math.BigDecimal;

public class PurchaseOrderRequest {
    private String address;
    private String cargoName;
    private String companyName;
    private String email;
    private String firstName;
    private String lastName;
    private BigDecimal price;
    private String username;
    private Status status;

    public PurchaseOrderRequest() {
    }

    public PurchaseOrderRequest(String address, String cargoName, String companyName, String email, String firstName,
                                String lastName, BigDecimal price, String username, Status status) {
        this.address = address;
        this.cargoName = cargoName;
        this.companyName = companyName;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.price = price;
        this.username = username;
        this.status = status;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCargoName() {
        return cargoName;
    }

    public void setCargoName(String cargoName) {
        this.cargoName = cargoName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
