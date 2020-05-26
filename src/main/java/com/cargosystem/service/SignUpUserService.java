package com.cargosystem.service;

import com.cargosystem.model.user.Customer;
import com.cargosystem.model.user.ERole;
import com.cargosystem.model.user.Role;
import com.cargosystem.model.user.User;
import com.cargosystem.payload.request.SignupRequest;
import com.cargosystem.repository.CustomerRepository;
import com.cargosystem.repository.RoleRepository;
import com.cargosystem.repository.UserRepository;
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

    public SignUpUserService(UserRepository userRepository,
                             PasswordEncoder encoder,
                             RoleRepository roleRepository,
                             CustomerRepository customerRepository) {
        this.userRepository = userRepository;
        this.encoder = encoder;
        this.roleRepository = roleRepository;
        this.customerRepository = customerRepository;
    }


    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    public void registerNewUser(SignupRequest signupRequest) {
        // Create new user's account
        User user = new User(signupRequest.getUsername(),
                signupRequest.getEmail(),
                signupRequest.getFirstName(),
                signupRequest.getLastName(),
                encoder.encode(signupRequest.getPassword()));

        String role = signupRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (role == null) {
            signUpCustomer(user);
        } else {
            switch (role) {
                case "manager":
                    Role managerRole = roleRepository.findByRole(ERole.ROLE_MANAGER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(managerRole);

                    break;
                case "driver":
                    Role driverRole = roleRepository.findByRole(ERole.ROLE_DRIVER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(driverRole);
                    break;
                default:
                    signUpCustomer(user);
            }
        }

//        user.setRoles(roles);
//        userRepository.save(user);
    }

    private void signUpManager() {

    }

    private void signUpDriver() {

    }

    private void signUpCustomer(User user) {
        Set<Role> roles = new HashSet<>();
        Customer customer = new Customer();
        Role customerRole = roleRepository.findByRole(ERole.ROLE_CUSTOMER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(customerRole);

        user.setRoles(roles);
        User savedUser = userRepository.save(user);
        customer.setUser(savedUser);
        customerRepository.save(customer);
    }
}
