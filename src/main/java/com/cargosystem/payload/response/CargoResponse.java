package com.cargosystem.payload.response;

import java.math.BigDecimal;

public class CargoResponse {
    private Long id;

    private String name;

    private BigDecimal price;

    private String companyName;

    public CargoResponse(Long id, String name, BigDecimal price, String companyName) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.companyName = companyName;
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
