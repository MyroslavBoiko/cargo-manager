package com.cargosystem.model.user;

import com.cargosystem.model.Company;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "driver")
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private User user;

    private String licenseNumber;

    @ManyToMany
    @JoinTable(name = "driver_categories",
            joinColumns = @JoinColumn(name = "driver_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<LicenseCategory> categories;

    @ManyToOne
    @JoinColumn(name="company_id")
    private Company company;
}
