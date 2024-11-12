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
    viewed INT DEFAULT 0,
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL
);

INSERT INTO club(clubId, name, description, campus, type, founded_date, email, password)
VALUES 
(1, 'Kannada Koota', 'Karnataka Culture Language Technical', 'RR', 'Cultural', '2022-09-18', 'kannadakoota@pes.edu', 'kannadakoota'),
(2, 'Pitch Please', 'The club brings together students interested in participating in AtmaTrisha, Freshers’ day', 'RR', 'Cultural', '2019-09-10', 'pitchplease@pes.edu', 'pitchplease'),
(3, 'Sanskriti', 'The club brings together students interested in classical and contemporary dances.', 'RR', 'Cultural', '2019-09-10', 'sanskriti@pes.edu', 'sanskriti');

CREATE TABLE IF NOT EXISTS events (
    event_id INT PRIMARY KEY NOT NULL,
    club_id INT NOT NULL,
    event_name VARCHAR(40) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    start_time DATE NOT NULL,
    end_time DATE NOT NULL,
    description VARCHAR(1000) NOT NULL,
    venue VARCHAR(30) NOT NULL,
	FOREIGN KEY (club_id) REFERENCES club(clubId)
);
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
(4, 2, 2, 'Club Head'),
(5, 3, 2, 'Technical Head'),
(6, 1, 2, 'Operations Head'),
(7, 1, 3, 'Club Head'),
(8, 2, 3, 'Technical Head'),
(9, 3, 3, 'Operations Head'),

CREATE TABLE IF NOT EXISTS participants (
	participant_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    UNIQUE(user_id, event_id)	
);

CREATE TABLE IF NOT EXISTS club_applications (
	application_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(200),
	campus ENUM('RR', 'EC') NOT NULL,
    type ENUM('Technical', 'Cultural', 'Community Service', 'Sports', 'Other') NOT NULL
);

INSERT IGNORE INTO participants (user_id, event_id) 
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(1, 3),
(2, 4),
(3, 5),
(4, 6),
(5, 1);

