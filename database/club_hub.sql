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
    email VARCHAR(40) NOT NULL,
    password VARCHAR(20) NOT NULL,
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


CREATE TABLE IF NOT EXISTS events (
    event_id INT PRIMARY KEY NOT NULL,
    club_name VARCHAR(30) NOT NULL,
    event_name VARCHAR(40) NOT NULL,
    date DATE NOT NULL,
    description VARCHAR(100)
);


INSERT INTO events (event_id, club_name, event_name, date, description) VALUES
(1, 'Photography Club', 'Nature Photography Workshop', '2024-10-20', 'Learn the art of capturing nature in this hands-on workshop.'),
(2, 'Coding Club', 'Hackathon 2024', '2024-11-05', 'Join us for a day-long coding challenge to solve real-world problems.'),
(3, 'Art Club', 'Canvas Painting Exhibition', '2024-11-15', 'Explore the creativity of our artists at the canvas painting exhibition.'),
(4, 'Dance Club', 'Hip-Hop Battle', '2024-12-10', 'Show off your moves in our exciting hip-hop dance battle.'),
(5, 'Music Club', 'Rock Concert', '2024-12-20', 'Experience live music with bands from around the city.'),
(6, 'Literature Club', 'Poetry Slam', '2025-01-15', 'An evening of expressive poetry by budding poets.');


USE club_hub;

INSERT INTO club(clubId, name, description, campus, type, founded_date)
VALUES 
(1, 'Kannada Koota', 'Karnataka Culture Language Technical', 'RR', 'Cultural', '2022-09-19'),
(2, 'Pitch Please', 'The club brings together students interested in participating in AtmaTrisha, Freshers’ day', 'RR', 'Cultural', '2019-09-10'),
(3, 'Sanskriti', 'The club brings together students interested in classical and contemporary dances.', 'RR', 'Cultural', '2019-09-10')