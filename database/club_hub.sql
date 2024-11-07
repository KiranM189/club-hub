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
    description_small VARCHAR(100),
    description_large VARCHAR(1000),
    venue VARCHAR(30) NOT NULL,
    event_promo VARCHAR(1000) NOT NULL

);

INSERT INTO events (event_id, club_name, event_name, date, description_small, description_large, venue, event_promo) 
VALUES 
(1, 'Photography Club', 'Nature Photography Workshop', '2024-10-20', 
    'Learn the art of capturing nature in this hands-on workshop.', 
    'The Photography Club presents a comprehensive Nature Photography Workshop designed for photographers of all skill levels. This hands-on workshop will guide you through the process of capturing stunning landscapes, wildlife, and the intricate details of nature. You\'ll learn expert techniques such as lighting, composition, and perspective while exploring natural environments. Experienced photographers will be on-site to offer personalized advice, helping you master your camera settings and develop your own unique style. All participants are encouraged to bring their own equipment and immerse themselves in the beauty of nature.', 
    'City Park', 
    'Don\'t miss this opportunity to learn from industry experts, connect with fellow photographers, and build your nature photography portfolio!'),

(2, 'Coding Club', 'Hackathon 2024', '2024-11-05', 
    'Join us for a day-long coding challenge to solve problems.', 
    'Hackathon 2024 is a dynamic, adrenaline-packed coding marathon hosted by the Coding Club. In this day-long event, teams of programmers, developers, and tech enthusiasts will come together to tackle complex coding challenges under tight deadlines. Participants will use their skills in various programming languages, frameworks, and APIs to design innovative solutions to real-world problems. The hackathon also offers networking opportunities with industry professionals and tech companies. It\'s a high-energy event filled with creativity, collaboration, and competition, offering prizes and recognition for the top teams.', 
    'Tech Innovation Hub', 
    'Join the ultimate coding challenge and prove your skills! Whether you\'re a seasoned coder or a beginner, Hackathon 2024 is the place to showcase your talent.'),

(3, 'Art Club', 'Canvas Painting Exhibition', '2024-11-15', 
    'Explore the creativity of our artists at the canvas painting.', 
    'Step into the world of artistic expression at the Canvas Painting Exhibition, an event hosted by the Art Club. This exhibition features a stunning collection of works created by both emerging and established artists, showcasing a diverse range of styles and themes. Each canvas tells a unique story, from abstract compositions to realistic portrayals of nature, people, and emotions. Attendees will have the opportunity to meet the artists, learn about their creative processes, and even purchase their favorite pieces. The exhibition is open to all, offering a space for art lovers to immerse themselves in the beauty and emotion of visual art.', 
    'Downtown Art Gallery', 
    'Be part of this artistic journey and witness the incredible talent within our community. Explore, connect, and be inspired!'),

(4, 'Dance Club', 'Hip-Hop Battle', '2024-12-10', 
    'Show off your moves in our exciting hip-hop dance battle.', 
    'Get ready to witness an explosive night of dance at the Hip-Hop Battle hosted by the Dance Club. This high-octane event brings together some of the best street dancers in the city to compete in a fierce and entertaining hip-hop dance competition. Dancers will face off in head-to-head battles, showcasing their agility, rhythm, and creativity on the dance floor. The event will feature live DJ performances, special guest judges from the world of dance, and plenty of surprises throughout the night. Whether you\'re a dancer or a fan of the genre, this is an event you won’t want to miss.', 
    'Main Event Hall', 
    'Bring your energy and get ready to cheer for your favorite dancers as they battle for supremacy in this electrifying competition!'),

(5, 'Music Club', 'Rock Concert', '2024-12-20', 
    'Experience live music with bands from around the city.', 
    'The Music Club is proud to present an unforgettable Rock Concert that will set the stage ablaze with energy and talent. Featuring some of the city’s top rock bands, this concert promises a night filled with powerful performances, thundering drum solos, and soaring guitar riffs. From classic rock anthems to modern hits, the bands will cover a wide spectrum of rock music, ensuring there\'s something for every fan. With state-of-the-art lighting and sound systems, this concert will deliver an immersive experience that\'s second to none. Get ready to sing along, dance, and lose yourself in the power of live rock music.', 
    'City Concert Hall', 
    'This is the ultimate rock experience for all music lovers. Grab your tickets now before they sell out and join us for a night of unforgettable music!'),

(6, 'Literature Club', 'Poetry Slam', '2025-01-15', 
    'An evening of expressive poetry by budding poets.', 
    'The Literature Club invites you to a night of raw emotion and powerful words at the Poetry Slam. This event celebrates the art of spoken word, bringing together local poets to share their original works on stage. Each poet will deliver emotionally charged performances that touch on themes such as love, identity, social justice, and personal growth. The audience will play an interactive role by providing feedback and voting for their favorite performances. The Poetry Slam offers a supportive space for poets to express themselves and for the audience to engage with thought-provoking, creative works.', 
    'Literature Cafe', 
    'Prepare to be moved by the spoken word as these talented poets leave their hearts on the stage. Be sure to reserve your spot and be part of this unforgettable literary experience.');

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
