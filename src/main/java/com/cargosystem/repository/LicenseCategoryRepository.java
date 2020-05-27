package com.cargosystem.repository;

import com.cargosystem.model.user.ELicenseCategory;
import com.cargosystem.model.user.LicenseCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface LicenseCategoryRepository extends JpaRepository<LicenseCategory, Long> {

    Set<LicenseCategory> findByLicenseCategoryIn(Set<ELicenseCategory> categories);

}
