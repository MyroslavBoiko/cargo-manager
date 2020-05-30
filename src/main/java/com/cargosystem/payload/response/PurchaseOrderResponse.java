package com.cargosystem.payload.response;

import java.math.BigDecimal;

public class PurchaseOrderResponse {

    private String cargoName;
    private BigDecimal price;
    private String address;
    private String status;

    public PurchaseOrderResponse() {
    }

    public PurchaseOrderResponse(String cargoName, BigDecimal price, String address, String status) {
        this.cargoName = cargoName;
        this.price = price;
        this.address = address;
        this.status = status;
    }

    public String getCargoName() {
        return cargoName;
    }

    public void setCargoName(String cargoName) {
        this.cargoName = cargoName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
