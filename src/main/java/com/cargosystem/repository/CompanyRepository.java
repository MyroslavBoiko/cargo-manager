package com.cargosystem.repository;

import com.cargosystem.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    Optional<Company> findCompanyByName(String name);
}
