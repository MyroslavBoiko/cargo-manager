package com.cargosystem.service;

import com.cargosystem.model.Cargo;
import com.cargosystem.payload.response.CargoResponse;
import org.springframework.stereotype.Service;

@Service
public class CargoService {

    public static CargoResponse mapList(Cargo cargo) {
        return new CargoResponse(cargo.getId(), cargo.getName(), cargo.getPrice(),
                cargo.getCompany().getName());
    }
}
