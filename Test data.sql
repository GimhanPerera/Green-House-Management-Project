INSERT INTO sit_project_database.users VALUES 
(1, 'Amal','Perera','rashmithagimhan32@gmail.com','12345'),
(2, 'Nuwan','Ashoka','rashmithan32@gmail.com','12345');

INSERT INTO sit_project_database.sensors VALUES 
(1, 'Temp sensor','Temperature','Temperature sensors are used to measure the temperature of air, liquids or solids.', 'Ok', 12.2, 9.1,11,'°C',1),
(2, 'Humidity1','Humidity','Humidity sensors are used to measure the amount of water vapour in the air. ','Ok', 19.2, 1.1,33,'%',1),
(3, 'SoilpH1','Soil pH','Soil pH sensors are used to measure the acidity or alkalinity of soil.', 'Ok', 12.2, 9.1,11,'pH',1),
(4, 'Humidity2','Humidity','Humidity sensors are used to measure the amount of water vapour in the air. ','Ok', 19.2, 1.1,33,'%',1),
(5, 'Temp sensor4','Temperature','Temperature sensors are used to measure the temperature of air, liquids or solids.', 'Ok', 22.2, 9.1,11,'°C',2);

INSERT INTO sit_project_database.histories VALUES 
(1000001, '2024-01-16 09:10:40',23,'active', 1),
(1000002, '2024-01-16 09:12:40',25,'active', 1),
(1000003, '2024-01-16 09:13:40',33,'active', 2),
(1000004, '2024-01-16 09:14:40',11,'active', 1),
(1000005, '2024-01-16 09:14:40',41,'active', 3),
(1000006, '2024-01-16 09:14:40',31,'active', 4);

SELECT * FROM sit_project_database.users;
SELECT * FROM sit_project_database.sensors;
SELECT * FROM sit_project_database.histories;