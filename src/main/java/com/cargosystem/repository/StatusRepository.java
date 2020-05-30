package com.cargosystem.repository;

import com.cargosystem.model.EStatus;
import com.cargosystem.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StatusRepository extends JpaRepository<Status, Long> {
    Optional<Status> findByStatus(EStatus status);
}
