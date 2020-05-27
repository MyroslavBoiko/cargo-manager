package com.cargosystem.repository;

import com.cargosystem.model.user.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerRepository extends JpaRepository<Manager, Long> {

    Manager findByUserId(Long id);
}
