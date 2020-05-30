package com.cargosystem.controller;

import com.cargosystem.model.Cargo;
import com.cargosystem.payload.request.CargoRequest;
import com.cargosystem.payload.response.CargoResponse;
import com.cargosystem.payload.response.MessageResponse;
import com.cargosystem.repository.CargoRepository;
import com.cargosystem.repository.CompanyRepository;
import com.cargosystem.service.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/cargo")
public class CargoController {

    @Autowired
    private CargoRepository cargoRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CargoService cargoService;

    @GetMapping
    @PreAuthorize("hasAnyRole('MANAGER', 'CUSTOMER')")
    public List<CargoResponse> getCargoes() {
        return cargoRepository.findAll().stream()
                .map(CargoService::mapList)
                .collect(Collectors.toList());
    }

    @PostMapping
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> createCargo(@RequestBody CargoRequest cargoRequest) {
        Cargo cargo = new Cargo();
        companyRepository.findCompanyByName(cargoRequest.getCompanyName())
                .ifPresent(cargo::setCompany);
        cargo.setName(cargoRequest.getName());
        cargo.setPrice(cargoRequest.getPrice());
        cargoRepository.save(cargo);
        return ResponseEntity.ok(new MessageResponse("Cargo created successfully!"));
    }

    @DeleteMapping
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> deleteCargo(@RequestParam String name) {
        Cargo cargo = cargoRepository.findByName(name);
        cargoRepository.delete(cargo);
        return ResponseEntity.ok(new MessageResponse("Cargo deleted successfully!"));
    }

}
