#ALTER TABLE F1_DB.Teams ADD CONSTRAINT UQ_NAME UNIQUE (TEAMNAME)
#SELECT * FROM F1_DB.Teams
-- USE F1_DB;
-- CREATE TABLE Cars (
--     CarID int(11) NOT NULL,
--     Team int(11) NOT NULL,
--     TopSpeed int(11) NOT NULL,
--     PRIMARY KEY (CarID)
-- );
#
-- CREATE TABLE Test (
--     TestID int AUTO_INCREMENT NOT NULL,
--     col1 int(11) NOT NULL,
--     col2 int(11) NOT NULL,
--     PRIMARY KEY (TestID)
-- );
DROP TABLE Test;
#
#USE F1_DB;
-- SHOW VARIABLES LIKE 'local_infile';
-- SET GLOBAL local_infile = 1;
-- LOAD DATA INFILE '/home/corny/dev/sql/cars.txt' 
-- INTO TABLE Teams COLUMNS TERMINATED BY '\t';
-- USE F1_DB;
-- INSERT INTO Cars
--     (CarID,Team,TopSpeed)
-- VALUES
--     ('2','2','354'),
--     ('3','3','345');DELETE FROM employees;SET SQL_SAFE_UPDATES = 0;
#
-- SET SQL_SAFE_UPDATES = 0;
#
-- DELETE FROM Cars;
#
-- INSERT INTO Cars
--     (CarID,Team,TopSpeed)
-- VALUES
-- 	(1,1,350),
-- 	(2,2,353),
--  (3,3,345),
-- 	(4,4,342),
-- 	(5,5,340),
-- 	(6,6,340),
-- 	(7,7,335),
-- 	(8,8,335),
-- 	(9,9,338),
-- 	(10,10,337);
#
-- INSERT INTO Drivers
--     (DriverID,FirstName,Surname,Country,DateOfBirth,Team)
-- VALUES
-- 	(7,'Nico','Hulkenberg','Germany',1987,4),
-- 	(8,'Daniel','Riccardo','Australia',1989,4),
-- 	(9,'Roman','Grosjean','France',1986,5),
-- 	(10,'Kevin','Magnussen','Denmark',1992,5),
-- 	(11,'Calros','Sainz','Spain',1994,6),
-- 	(12,'Lando','Norris','England',1997,6),
-- 	(13,'Sergio','Perez','Mexico',1990,7),
--     (14,'Lance','Stroll','Canada',1998,7),
--     (15,'Kimi','Raikonen','Finland',1979,8),
--     (16,'Antonio','Giovanazzi','Italy',1993,8),
--     (17,'Daniil','Kvyat','Russia',1996,9),
--     (18,'Alexander','Albon','England',1996,9),
--     (19,'Robert','Kubica','Poland',1984,10),
--     (20,'George','Russel','England',1997,10);
#
-- INSERT INTO Drivers (DriverID,Team) 
-- VALUES (2,1),(3,2),(4,2),(5,3),(6,3)
-- ON DUPLICATE KEY UPDATE Team=VALUES(Team);
#
-- ALTER TABLE Drivers CHANGE COLUMN Contry Country VARCHAR(45); 
#