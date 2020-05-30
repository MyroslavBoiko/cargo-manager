INSERT INTO roles(role) VALUES
('ROLE_MANAGER'),
('ROLE_CUSTOMER'),
('ROLE_DRIVER');

INSERT INTO status(status) VALUES
 ('NOT_ASSIGNED'),
 ('ASSIGNED'),
 ('ARRIVED'),
 ('DELIVERED');

INSERT INTO license_category(category) VALUES
('B'),
('BE'),
('C'),
('CE');

INSERT INTO user VALUES
(1, 'manager@gmail.com','John', 'Doe', '$2a$10$INUPSrqg7UT6UEi0MeYW8eQwqxNRC7BWEL9.ueklhNkB1eYrL2M4C', 'manager'),
(2, 'customer@gmail.com','Mike', 'Fogs', '$2a$10$9wCTmCj.Qc7n8Q7X/y819.dUqXwdregx3GxurGcrzRR7.yP7KIr3i', 'customer'),
(3, 'driver@gmail.com','Jason', 'Brown', '$2a$10$tO5h5vgQnjCqnjRSzjWi6OFrPKTZpPbPT4SdmmDI8cSAVnwwyH6WW', 'driver');

INSERT INTO user_roles VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO company VALUES
(1, 'First Freight');

INSERT INTO driver VALUES
(1, '123QWERTY', 1, 3);

INSERT INTO manager VALUES
(1, 1, 1);

INSERT INTO customer VALUES
(1, 2);

INSERT INTO driver_categories VALUES
(1, 1),
(1, 2);

INSERT INTO cargo VALUES
(1, 'Sand', 12.4, 1),
(2, 'Oil', 122.4, 1),
(3, 'Grain', 52.4, 1),
(4, 'Paper', 142.4, 1);

INSERT INTO purchase_order VALUES
(1, 'Kyiv, Peremohy st.', 1, 1, 1, NULL, 1),
(2, 'Kyiv', 1, 1, 1, 1, 4);
