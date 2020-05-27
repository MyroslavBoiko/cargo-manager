package com.cargosystem.payload.request;

import com.cargosystem.model.user.LicenseCategory;

import java.util.Set;

public class UserDataResponse {

    private String username;

    private String firstName;

    private String lastName;

    private String role;

    private String email;

    private String license;

    private String companyName;

    private Set<LicenseCategory> licenseCategories;

    public UserDataResponse(String username, String firstName, String lastName, String role, String email, String license, String companyName, Set<LicenseCategory> licenseCategories) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.email = email;
        this.license = license;
        this.companyName = companyName;
        this.licenseCategories = licenseCategories;
    }

    public UserDataResponse() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public Set<LicenseCategory> getLicenseCategories() {
        return licenseCategories;
    }

    public void setLicenseCategories(Set<LicenseCategory> licenseCategories) {
        this.licenseCategories = licenseCategories;
    }
}
