package com.cargosystem.service;

import com.cargosystem.model.Company;
import com.cargosystem.model.user.*;
import com.cargosystem.payload.request.SignupRequest;
import com.cargosystem.repository.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class SignUpUserService {

    private final UserRepository userRepository;

    private final PasswordEncoder encoder;

    private final RoleRepository roleRepository;

    private final CustomerRepository customerRepository;

    private final CompanyRepository companyRepository;

    private final ManagerRepository managerRepository;

    private final DriverRepository driverRepository;

    private final LicenseCategoryRepository licenseCategoryRepository;

    public SignUpUserService(UserRepository userRepository,
                             PasswordEncoder encoder,
                             RoleRepository roleRepository,
                             CustomerRepository customerRepository,
                             CompanyRepository companyRepository,
                             ManagerRepository managerRepository,
                             DriverRepository driverRepository,
                             LicenseCategoryRepository licenseCategoryRepository) {
        this.userRepository = userRepository;
        this.encoder = encoder;
        this.roleRepository = roleRepository;
        this.customerRepository = customerRepository;
        this.companyRepository = companyRepository;
        this.managerRepository = managerRepository;
        this.driverRepository = driverRepository;
        this.licenseCategoryRepository = licenseCategoryRepository;
    }


    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    public void registerNewUser(SignupRequest signupRequest) {

        String role = signupRequest.getRole();

        if (role == null) {
            signUpCustomer(signupRequest);
        } else {
            switch (role) {
                case "manager":
                    signUpManager(signupRequest);
                    break;
                case "driver":
                    signUpDriver(signupRequest);
                    break;
                default:
                    signUpCustomer(signupRequest);
            }
        }
    }

    private void signUpManager(SignupRequest signupRequest) {
        // Create new user's account
        User user = createUser(signupRequest);

        Set<Role> roles = new HashSet<>();
        Manager manager = new Manager();
        Role role = roleRepository.findByRole(ERole.ROLE_CUSTOMER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(role);

        user.setRoles(roles);
        User savedUser = userRepository.save(user);
        manager.setUser(savedUser);
        Company company = new Company();
        company.setName(signupRequest.getCompanyName());
        companyRepository.save(company);
        manager.setCompany(company);
        managerRepository.save(manager);
    }

    private void signUpDriver(SignupRequest signupRequest) {
        // Create new user's account
        User user = createUser(signupRequest);

        Set<Role> roles = new HashSet<>();
        Driver driver = new Driver();
        Role role = roleRepository.findByRole(ERole.ROLE_CUSTOMER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(role);

        user.setRoles(roles);
        User savedUser = userRepository.save(user);
        driver.setUser(savedUser);
        driver.setLicenseNumber(signupRequest.getLicense());
        Set<LicenseCategory> licenseCategories =
                licenseCategoryRepository.findByLicenseCategoryIn(signupRequest.getLicenseCategories());

        Company company = companyRepository.findCompanyByName(signupRequest.getCompanyName())
                .orElseThrow(() -> new RuntimeException("Error:Company name not found."));
        ;

        driver.setCategories(licenseCategories);
        driver.setCompany(company);
        driverRepository.save(driver);
    }

    private void signUpCustomer(SignupRequest signupRequest) {
        // Create new user's account
        User user = createUser(signupRequest);

        Set<Role> roles = new HashSet<>();
        Customer customer = new Customer();
        Role role = roleRepository.findByRole(ERole.ROLE_CUSTOMER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(role);

        user.setRoles(roles);
        User savedUser = userRepository.save(user);
        customer.setUser(savedUser);
        customerRepository.save(customer);
    }

    private User createUser(SignupRequest signupRequest) {
        return new User(signupRequest.getUsername(),
                signupRequest.getEmail(),
                signupRequest.getFirstName(),
                signupRequest.getLastName(),
                encoder.encode(signupRequest.getPassword()));
    }
}
