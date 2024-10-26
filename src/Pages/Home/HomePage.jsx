import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css';

const events = [
  {
    id: 1,
    clubName: 'Photography Club',
    eventName: 'Nature Photography Workshop',
    date: 'October 20, 2024',
    description: 'Learn the art of capturing nature in this hands-on workshop.',
    iamge : 'https://picsum.photos/800/400'
  },
  {
    id: 2,
    clubName: 'Coding Club',
    eventName: 'Hackathon 2024',
    date: 'November 5, 2024',
    description: 'Join us for a day-long coding challenge to solve real-world problems.',
    image: 'https://picsum.photos/800/400',
  },
  {
    id: 3,
    clubName: 'Art Club',
    eventName: 'Canvas Painting Exhibition',
    date: 'November 15, 2024',
    description: 'Explore the creativity of our artists at the canvas painting exhibition.',
    image: 'https://picsum.photos/800/400',
  },
  {
    id: 4,
    clubName: 'Dance Club',
    eventName: 'Hip-Hop Battle',
    date: 'December 10, 2024',
    description: 'Show off your moves in our exciting hip-hop dance battle.',
    image: 'https://picsum.photos/800/400',
  },
  {
    id: 5,
    clubName: 'Music Club',
    eventName: 'Rock Concert',
    date: 'December 20, 2024',
    description: 'Experience live music with bands from around the city.',
    image: 'https://picsum.photos/800/400',
  },
  {
    id: 6,
    clubName: 'Literature Club',
    eventName: 'Poetry Slam',
    date: 'January 15, 2025',
    description: 'An evening of expressive poetry by budding poets.',
    image: 'https://picsum.photos/800/400',
  },
];

const HomePage = () => {
  const featuredEvents = events.slice(0, 3); // First three events for the carousel
  const regularEvents = events.slice(3); // Remaining events for the regular cards

  return (
    <div className="home-page">
      <h1>Welcome to Club Hub</h1>
      <p>Discover events from various clubs happening around you!</p>

      {/* Carousel Section */}
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          {featuredEvents.map((event) => (
            <div key={event.id} className="carousel-slide">
              <img src={event.image} alt={event.eventName} />
              <div className="carousel-caption">
                <h2>{event.clubName}</h2>
                <h3>{event.eventName}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Regular Cards Section */}
      <div className="events-container">
        {regularEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h2>{event.clubName}</h2>
            <h3>{event.eventName}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
            <button className="join-button">Join Event</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
