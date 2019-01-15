#1) Wyświetlić tylko kierowców z Polskiej {SELECT ... WHERE}
-- USE F1_DB;
-- SELECT * FROM Drivers
-- WHERE Country = "Poland";
#2) Wyświetlić tylko samochody, które mają top speed powyzej 340
-- SELECT * FROM Cars
-- WHERE TopSpeed > 340;
#3) Wyświetlić tylko imiona i nazwiska kierowców, posortowane alfabetycznie (najpierw wg Nazwiska)
-- USE F1_DB;
-- SELECT Surname FROM Drivers
-- ORDER BY Surname;
#
-- SELECT FirstName FROM Drivers
-- ORDER BY FirstName;
#4) Napisać zapytanie które zwróci jedną kolumnę "Imie i Nazwisko" ze złączonymi Imieniem i  Nazwiskiem z tabeli Kierowcy {CONCAT lub coś podobnego + alias, AS}
-- SELECT CONCAT(FirstName,' ',Surname)
-- FROM Drivers; 
#5) Wyświetlić wszystkie kraje pochodzenia kierówców, żeby się nie powtarzały (jeśli i tak się nie powtarzają to wybrać inną kolumnę gdzie jest co najmniej dwie takie same wartości) 
-- SELECT DISTINCT Country FROM Drivers;
#6) Wyświetlić tylko kierowców, których nazwiska zaczynają się na K {LIKE}
-- SELECT Surname FROM Drivers WHERE Surname LIKE 'K%';
#7) Ile jest kierowców powyżej 30 roku życia? {COUNT}
-- SELECT COUNT(DateOfBirth)
-- FROM Drivers
-- WHERE Year(CURDATE())-DateOfBirth>30;
#Teraz trochę weselej: 
#8) Napisać zapytanie, które zwróci dwie kolumny - Imie_i_Nazwisko (złączone kolumny Imie i Nazwisko z tabeli kierowcy, jak w zadaniu 4) i nazwa zespołu w którym jeździ. {JOIN}
-- SELECT CONCAT(Drivers.FirstName, ' ',Drivers.Surname), Teams.TeamName 
-- FROM Drivers
-- JOIN Teams ON Drivers.Team=Teams.TeamID;
#9) Wyświetlić wszystkie kierowców zespołu Red Bull
-- SELECT Drivers.FirstName, Drivers.Surname, Teams.TeamName
-- FROM Drivers
-- JOIN Teams ON Drivers.Team=Teams.TeamID
-- WHERE Teams.TeamName = 'Red Bull';
#10) Zmienić jeden wybrany wiersz wybranej kolumy {UPDATE}
-- UPDATE Drivers
-- SET FirstName = 'Robercik'
-- WHERE Surname='Kubica';  
#11) Do nazwiska wszystkich kierowców Wiliams dodać na końcu wykrzyknik - trochę trudniejsze, UPDATE i JOIN 
-- UPDATE Drivers
-- JOIN Teams ON Drivers.Team=Teams.TeamID
-- SET SURNAME = CONCAT(SURNAME,'!')
-- WHERE Teams.TeamName = 'Williams';
#12) Napisać zapytanie, które zwróci dwie kolumny: Kraj_pochodzenia i ilość kierowców, którzy z tego kraju pochodzą {GROUP BY} - bardziej zaawansowne, dla podstaw tego nie potrzebujesz, ale będzie fajnie jak też będziesz umiał, tak samo też następne zadanie.
-- SELECT Country, COUNT(DriverID)
-- FROM Drivers
-- GROUP BY Country
-- ORDER BY COUNT(DriverID);
#13) Dodać do poprzedniego zapytania ograniczenie: nich wypisuje tylko te kraje, w których ilość kierowców jest więcej niż 2 {GROUP BY ... HAVING}
-- USE F1_DB;
-- SELECT Country, COUNT(DriverID)
-- FROM Drivers
-- GROUP BY Country
-- HAVING COUNT(DriverID) > 1;
let login = 'tttt' OR 1=1;#';
let password;

let sql = "SELECT * FROM USERS U WHERE U.Login ='"+login+"' AND U.Password="+password;
SELECT * FROM USERS U WHERE U.Login ='tttt' OR 1=1;DROP TABLE USERS;#AND U.Password='+password;


