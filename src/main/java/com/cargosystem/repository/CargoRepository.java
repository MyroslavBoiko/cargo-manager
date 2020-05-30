package com.cargosystem.repository;

import com.cargosystem.model.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CargoRepository extends JpaRepository<Cargo, Long> {
    Cargo findByName(String name);
}
