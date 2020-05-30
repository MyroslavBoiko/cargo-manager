package com.cargosystem.payload.request;

import java.math.BigDecimal;

public class CargoRequest {

    private String name;

    private BigDecimal price;

    private String companyName;


    public CargoRequest(String name, BigDecimal price, String companyName) {
        this.name = name;
        this.price = price;
        this.companyName = companyName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}
