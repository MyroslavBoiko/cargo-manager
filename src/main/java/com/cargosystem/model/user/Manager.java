package com.cargosystem.model.user;

import com.cargosystem.model.Company;

import javax.persistence.*;

@Entity
@Table(name = "manager")
public class Manager {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private User user;

    @OneToOne
    @JoinColumn(name = "company_id")
    private Company company;

}
