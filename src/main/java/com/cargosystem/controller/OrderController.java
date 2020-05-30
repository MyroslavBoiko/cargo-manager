package com.cargosystem.controller;

import com.cargosystem.model.EStatus;
import com.cargosystem.model.PurchaseOrder;
import com.cargosystem.model.user.Customer;
import com.cargosystem.model.user.User;
import com.cargosystem.payload.request.PurchaseOrderRequest;
import com.cargosystem.payload.response.MessageResponse;
import com.cargosystem.payload.response.PurchaseOrderResponse;
import com.cargosystem.repository.*;
import com.cargosystem.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private PurchaseOrderRepository purchaseOrderRepository;
    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private CargoRepository cargoRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private StatusRepository statusRepository;

    @GetMapping("/all")
    @PreAuthorize("hasRole('MANAGER')")
    public List<PurchaseOrder> getOrders() {
        return purchaseOrderRepository.findAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> createOrder(@RequestBody PurchaseOrderRequest orderRequest) {
        PurchaseOrder purchaseOrder = new PurchaseOrder();
        purchaseOrder.setCargo(cargoRepository.findByName(orderRequest.getCargoName()));
        purchaseOrder.setCompany(companyRepository.findCompanyByName(orderRequest.getCompanyName()).get());
        purchaseOrder.setCustomer(
                customerRepository.findCustomerByUserId(
                        userRepository.findByUsername(orderRequest.getUsername())
                                .get().getId()));
        purchaseOrder.setStatus(
                statusRepository.findByStatus(EStatus.NOT_ASSIGNED).get());
        purchaseOrder.setAddress(orderRequest.getAddress());
        purchaseOrderRepository.save(purchaseOrder);
        return ResponseEntity.ok(new MessageResponse("Order created successfully!"));
    }

    @GetMapping("/customer")
    @PreAuthorize("hasRole('CUSTOMER')")
    public List<PurchaseOrderResponse> getCustomerOrders(@RequestParam String username) {
        Optional<User> user = userRepository.findByUsername(username);
        Customer customer = customerRepository.findCustomerByUserId(user.get().getId());
        List<PurchaseOrder> purchaseOrders = purchaseOrderRepository.findAllByCustomerId(customer.getId());
        return purchaseOrders.stream()
                .map(OrderService::mapList)
                .collect(Collectors.toList());
    }


}
