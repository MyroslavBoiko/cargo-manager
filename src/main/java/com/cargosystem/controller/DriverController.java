package com.cargosystem.controller;

import com.cargosystem.model.user.Driver;
import com.cargosystem.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/driver")
public class DriverController {

    @Autowired
    private DriverRepository driverRepository;

    @GetMapping("/all")
    @PreAuthorize("hasRole('MANAGER')")
    public List<Driver> getCargoes() {
        return driverRepository.findAll();
    }
}
