package com.cargosystem.controller;

import com.cargosystem.model.user.*;
import com.cargosystem.payload.request.LoginRequest;
import com.cargosystem.payload.request.SignupRequest;
import com.cargosystem.payload.request.UserDataResponse;
import com.cargosystem.payload.response.JwtResponse;
import com.cargosystem.payload.response.MessageResponse;
import com.cargosystem.repository.CustomerRepository;
import com.cargosystem.repository.DriverRepository;
import com.cargosystem.repository.ManagerRepository;
import com.cargosystem.repository.UserRepository;
import com.cargosystem.security.jwt.JwtUtils;
import com.cargosystem.security.service.UserDetailsImpl;
import com.cargosystem.service.SignUpUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    SignUpUserService signUpUserService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    DriverRepository driverRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    ManagerRepository managerRepository;

    @Autowired
    JwtUtils jwtUtils;

    @GetMapping("/users")
    @PreAuthorize("hasRole('MANAGER')")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user")
    @PreAuthorize("hasAnyRole('MANAGER', 'DRIVER', 'CUSTOMER')")
    public UserDataResponse getUser(@RequestParam Long userId) {
        UserDataResponse userDataResponse = new UserDataResponse();
        User user = userRepository.findById(userId).get();
        userDataResponse.setFirstName(user.getFirstName());
        userDataResponse.setLastName(user.getLastName());
        userDataResponse.setEmail(user.getEmail());
        userDataResponse.setUsername(user.getUsername());
        List<ERole> roles = user.getRoles().stream()
                .map(Role::getRole)
                .collect(Collectors.toList());
        ERole role = roles.get(0);
        userDataResponse.setRole(role.name());
        switch (role) {
            case ROLE_DRIVER:
                Driver driver = driverRepository.findByUserId(user.getId());
                userDataResponse.setCompanyName(driver.getCompany().getName());
                userDataResponse.setLicense(driver.getLicenseNumber());
                userDataResponse.setLicenseCategories(driver.getCategories());
                break;
            case ROLE_MANAGER:
                Manager manager = managerRepository.findByUserId(user.getId());
                userDataResponse.setCompanyName(manager.getCompany().getName());
                break;
        }

        return userDataResponse;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (signUpUserService.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (signUpUserService.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        signUpUserService.registerNewUser(signUpRequest);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}
