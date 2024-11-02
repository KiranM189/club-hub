CREATE DATABASE IF NOT EXISTS club_hub;

USE club_hub; 

CREATE TABLE IF NOT EXISTS users (
	srn CHAR(13) PRIMARY KEY,
	username VARCHAR(30) NOT NULL UNIQUE,
    about VARCHAR(200),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    gender ENUM('Male', 'Female', 'Other'),
    contact CHAR(10) NOT NULL,
    campus ENUM('RR', 'EC') NOT NULL,
    year_of_graduation YEAR NOT NULL,
    specialization ENUM('CS', 'AM', 'EC', 'EE', 'ME', 'BT') NOT NULL,
    CONSTRAINT chk_contact CHECK (contact REGEXP '^[0-9]{10}$'),
    CONSTRAINT chk_srn CHECK (srn REGEXP '^PES[12](UG|PG)(21|22|23|24)(CS|AM|EC|EE|ME|BT)[0-9]{3}$'),
    CONSTRAINT chk_year CHECK (year_of_graduation BETWEEN 2025 AND 2028)
);

CREATE TABLE IF NOT EXISTS club (
	clubID INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(200),
	campus ENUM('RR', 'EC') NOT NULL,
    type ENUM('Technical', 'Cultural', 'Community Service', 'Sports', 'Other') NOT NULL,
    founded_date DATE NOT NULL,
	liked INT DEFAULT 0,
    viewed INT DEFAULT 0
);

USE club_hub;

INSERT INTO club(clubId, name, description, campus, type, founded_date)
VALUES 
(1, 'Kannada Koota', 'Karnataka Culture Language Technical', 'RR', 'Cultural', '2022-09-19'),
(2, 'Pitch Please', 'The club brings together students interested in participating in AtmaTrisha, Freshers’ day', 'RR', 'Cultural', '2019-09-10'),
(3, 'Sanskriti', 'The club brings together students interested in classical and contemporary dances.', 'RR', 'Cultural', '2019-09-10')