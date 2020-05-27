package com.cargosystem.repository;

import com.cargosystem.model.user.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepository extends JpaRepository<Driver, Long> {

    Driver findByUserId(Long id);
}
