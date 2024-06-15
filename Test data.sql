SELECT * FROM sit_project_database.histories;
SELECT * FROM sit_project_database.sensors;

INSERT INTO sit_project_database.sensors VALUES 
('S001', 'Temp sensor','active', 12.2, 9.1,'2024-01-16 09:10:40', 'C'),
('S002', 'Temp sensor2','active', 19.2, 1.1,'2024-01-16 09:10:40', 'K');

INSERT INTO sit_project_database.histories VALUES 
(1000001, '2024-01-16 09:10:40',23,'active', 'S001'),
(1000002, '2024-01-16 09:12:40',25,'active', 'S001'),
(1000003, '2024-01-16 09:13:40',33,'active', 'S002'),
(1000004, '2024-01-16 09:14:40',11,'active', 'S001');