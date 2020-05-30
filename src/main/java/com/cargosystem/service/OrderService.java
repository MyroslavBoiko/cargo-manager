package com.cargosystem.service;

import com.cargosystem.model.PurchaseOrder;
import com.cargosystem.payload.response.PurchaseOrderResponse;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    public static PurchaseOrderResponse mapList(PurchaseOrder order) {
        return new PurchaseOrderResponse(order.getCargo().getName(),
                order.getCargo().getPrice(), order.getAddress(), order.getStatus().getStatus().toString());
    }
}
