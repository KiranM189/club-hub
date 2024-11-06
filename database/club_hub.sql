CREATE DATABASE IF NOT EXISTS club_hub;

USE club_hub; 

CREATE TABLE IF NOT EXISTS admin (
	admin_id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30),
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL
);

INSERT INTO admin (admin_id, first_name, last_name, email, password)
VALUES 
(1, 'Keerthan', 'Shenoy', 'shenoyk2003@gmail.com', 'admin'),
(2, 'Kiran', 'M', 'kirankirankiran189@gmail.com', 'admin');

CREATE TABLE IF NOT EXISTS users (
	id INT PRIMARY KEY,
	srn CHAR(13) NOT NULL UNIQUE,
	username VARCHAR(30) NOT NULL UNIQUE,
    about VARCHAR(200),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30),
    gender ENUM('Male', 'Female', 'Other'),
    contact CHAR(10) NOT NULL,
    campus ENUM('RR', 'EC') NOT NULL,
    year_of_graduation YEAR NOT NULL,
    specialization ENUM('CS', 'AM', 'EC', 'EE', 'ME', 'BT') NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL,
    CONSTRAINT chk_contact CHECK (contact REGEXP '^[0-9]{10}$'),
    CONSTRAINT chk_srn CHECK (srn REGEXP '^PES[12](UG|PG)(21|22|23|24)(CS|AM|EC|EE|ME|BT)[0-9]{3}$'),
    CONSTRAINT chk_year CHECK (year_of_graduation BETWEEN 2025 AND 2028)
);

INSERT INTO users (id, srn, username, about, first_name, last_name, gender, contact, campus, year_of_graduation, specialization, email, password)
VALUES 
(1, 'PES1UG23CS101', 'jdoe123', 'A computer science enthusiast.', 'John', 'Doe', 'Male', '9876543210', 'RR', 2025, 'CS', 'jdoe123@example.com', 'password123'),
(2, 'PES2PG22AM102', 'asmith456', 'Loves applied mathematics and data science.', 'Alice', 'Smith', 'Female', '9123456789', 'EC', 2026, 'AM', 'asmith456@example.com', 'securepass456'),
(3, 'PES1UG24ME103', 'bryan789', 'Mechanical engineering student with a passion for design.', 'Bryan', 'Green', 'Male', '9871234567', 'RR', 2028, 'ME', 'bryan789@example.com', 'mechpass789'),
(4, 'PES1UG23EC104', 'carlie25', 'Exploring the world of electronics and communications.', 'Carlie', 'Brown', 'Other', '9123654780', 'EC', 2025, 'EC', 'carlie25@example.com', 'ecomm25'),
(5, 'PES2UG22BT105', 'dharper12', 'Biotechnology major focused on environmental sustainability.', 'Diana', 'Harper', 'Female', '9812345670', 'RR', 2026, 'BT', 'dharper12@example.com', 'biotech123');

CREATE TABLE IF NOT EXISTS club (
	clubId INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(200),
	campus ENUM('RR', 'EC') NOT NULL,
    type ENUM('Technical', 'Cultural', 'Community Service', 'Sports', 'Other') NOT NULL,
    founded_date DATE NOT NULL,
    viewed INT DEFAULT 0
);

INSERT INTO club(clubId, name, description, campus, type, founded_date)
VALUES 
(1, 'Kannada Koota', 'Karnataka Culture Language Technical', 'RR', 'Cultural', '2022-09-18'),
(2, 'Pitch Please', 'The club brings together students interested in participating in AtmaTrisha, Freshers’ day', 'RR', 'Cultural', '2019-09-10'),
(3, 'Sanskriti', 'The club brings together students interested in classical and contemporary dances.', 'RR', 'Cultural', '2019-09-10');

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

CREATE TABLE IF NOT EXISTS members (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    club_id INT NOT NULL,
    position ENUM('Club Head', 'Technical Head', 'Operations Head') NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (club_id) REFERENCES club(clubId)
);

INSERT INTO members (member_id, user_id, club_id, position) VALUES
(1, 1, 1, 'Club Head'),
(2, 2, 1, 'Technical Head'),
(3, 3, 1, 'Operations Head');

CREATE TABLE IF NOT EXISTS participants (
	participant_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE IF NOT EXISTS club_applications (
	application_id INT PRIMARY KEY AUTO_INCREMENT,
    srn CHAR(13) NOT NULL,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(200),
	campus ENUM('RR', 'EC') NOT NULL,
    type ENUM('Technical', 'Cultural', 'Community Service', 'Sports', 'Other') NOT NULL
);