package com.cargosystem.model.user;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class LicenseCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(name = "category", length = 2)
    private ELicenseCategory licenseCategory;

    public LicenseCategory() {
    }

    public LicenseCategory(ELicenseCategory licenseCategory) {
        this.licenseCategory = licenseCategory;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ELicenseCategory getLicenseCategory() {
        return licenseCategory;
    }

    public void setLicenseCategory(ELicenseCategory licenseCategory) {
        this.licenseCategory = licenseCategory;
    }
}
