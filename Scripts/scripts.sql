CREATE DATABASE semilleroSas;

USE semilleroSas;

DROP TABLE IF EXISTS tipo_marca;

CREATE TABLE tipo_marca (
    id_marca INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    desc_marca VARCHAR(100) NOT NULL,
    activo ENUM('S', 'N') NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS tipo_linea;

CREATE TABLE tipo_linea (
    id_linea INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    desc_linea VARCHAR(100) NOT NULL,
    id_marca INT(5) UNSIGNED NOT NULL,
    activo ENUM('S', 'N') NOT NULL, 
    CONSTRAINT `fk_tipo_marca` FOREIGN KEY (`id_marca`) REFERENCES tipo_marca(`id_marca`)      
) ENGINE=InnoDB;

DROP TABLE IF EXISTS vehiculos;

CREATE TABLE vehiculos (
    nro_placa VARCHAR(10) PRIMARY KEY,
    id_linea INT(5) UNSIGNED NOT NULL,
    modelo ENUM ('2010', '2011', '2012', '2013', '2014', '2015'),
    fecha_ven_seguro DATE NOT NULL,
    fecha_ven_tecnicomecanica DATE NOT NULL,
    fecha_ven_contratodo DATE NULL, -- No es obligatorio que todos los vehiculos posean un seguro contra todo.
    CONSTRAINT `fk_tipo_linea` FOREIGN KEY (`id_linea`) REFERENCES tipo_linea(`id_linea`)    
) ENGINE=InnoDB;

-- inserts

INSERT INTO tipo_marca( desc_marca, activo)
VALUES ('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit','S'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.','N'),
('egestas sed tempus urna et. Fusce id velit ut tortor. Turpis nunc eget lorem dolor sed viverra ','S'),
('vitae aliquet nec ullamcorper sit amet risus. Est velit egestas dui id ornare arcu odio. Morbi ','S'),
('adipiscing diam. Nulla malesuada pellentesque elit eget gravida. Sed vulputate','N');

INSERT INTO tipo_linea(desc_linea, id_marca, activo)
VALUES ('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',1, 'S'),
('vitae aliquet nec ullamcorper sit amet risus. Est velit egestas dui id ornare arcu odio. Morbi',2, 'S'),
('egestas sed tempus urna et. Fusce id velit ut tortor. Turpis nunc eget lorem dolor sed viverra',3, 'S'),
('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',4, 'N'),
('vitae aliquet nec ullamcorper sit amet risus. Est velit egestas dui id ornare arcu odio. Morbi',5, 'S'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.',3, 'S'),
('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',2, 'N'),
('vitae aliquet nec ullamcorper sit amet risus. Est velit egestas dui id ornare arcu odio. Morbi',1, 'S'),
('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',4, 'S'),
('adipiscing diam. Nulla malesuada pellentesque elit eget gravida. Sed vulputate',4, 'N'),
('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',1, 'S'),
('egestas sed tempus urna et. Fusce id velit ut tortor. Turpis nunc eget lorem dolor sed viverra',2, 'S'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.',1, 'N'),
('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',4, 'S'),
('egestas sed tempus urna et. Fusce id velit ut tortor. Turpis nunc eget lorem dolor sed viverra',2, 'N'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.',1, 'N'),
('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',4, 'S'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.',2, 'S'),
('adipiscing diam. Nulla malesuada pellentesque elit eget gravida. Sed vulputate',3, 'N'),
('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',1, 'S');

INSERT INTO vehiculos(nro_placa, id_linea, modelo, fecha_ven_seguro, fecha_ven_tecnicomecanica, fecha_ven_contratodo)
VALUES ('BRN35F', '14', '2010', '2021-01-01', '2010-01-05', '2010-01-06'),
('EFD35A', 22, '2013', '2021-01-01', '2010-01-05', '2021-12-30'),
('BRW35C', 23, '2014', '2021-01-01', '2010-01-05', '2019-03-06'),
('BRN35G', 40, '2014', '2021-01-01', '2010-01-05', '2010-11-06'),
('BLA35F', 39, '2013', '2021-01-01', '2010-01-05', '2010-12-06'),
('SIST56', 29, '2012', '2021-01-01', '2010-01-05', '2010-09-06'),
('WEN354', 25, '2010', '2021-01-01', '2010-01-05', '2010-03-06'),
('BRRRW3', 21, '2014', '2021-01-01', '2010-01-05', '2010-02-19'),
('BIIRR3', 21, '2014', '2021-01-01', '2010-01-05', '2010-01-15'),
('RTE355', 34, '2012', '2021-01-01', '2010-01-05', '2010-12-12'),
('EBBN35', 29, '2014', '2021-01-01', '2010-01-05', '2010-12-23'),
('KLN353', 30, '2015', '2021-01-01', '2010-01-05', '2010-09-12'),
('HRN353', 25, '2012', '2021-01-01', '2010-01-05', '2010-07-12'),
('TRN35Y', 23, '2014', '2021-01-01', '2010-01-05', '2010-05-09'),
('MBRN35', 25, '2012', '2021-01-01', '2010-01-05', '2010-04-07'),
('KIN35G', 29, '2013', '2021-01-01', '2010-01-05', '2010-03-05'),
('CKN35S', 30, '2015', '2021-01-01', '2010-01-05', '2010-02-03'),
('HRN35W', 40, '2013', '2021-01-01', '2010-01-05', '2010-01-02');

INSERT INTO vehiculos(nro_placa, id_linea, modelo, fecha_ven_seguro, fecha_ven_tecnicomecanica)
VALUES('BDD35B', 21, '2015', '2021-01-01', '2010-01-05'),
('LRN352', 33, '2011', '2021-01-01', '2010-01-05'),
('BRWE3l', 32, '2013', '2021-01-01', '2010-01-05'),
('BRN55F', 37, '2010', '2021-01-01', '2010-01-05'),
('QWEN55', 29, '2011', '2021-01-01', '2010-01-05'),
('YBB45F', 22, '2011', '2021-01-01', '2010-01-05'),
('BRN35E', 24, '2012', '2021-01-01', '2010-01-05'),
('DONMA5', 23, '2015', '2021-01-01', '2010-01-05'),
('DIE888', 31, '2011', '2021-01-01', '2010-01-05'),
('HGLY53', 29, '2011', '2021-01-01', '2010-01-05'),
('REN35V', 28, '2011', '2021-01-01', '2010-01-05'),
('RRN351', 28, '2011', '2021-01-01', '2010-01-05'),
('CRN33', 40, '2010', '2021-01-01', '2010-01-05');