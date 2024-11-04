import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css';
import Footer from '../../components/NavBar/Footer';
import axios from 'axios';
import { useState,useEffect } from 'react';
const HomePage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:5050')
          .then(response => {
              console.log(response.data);
              setEvents(response.data);
          })
          .catch(error => {
              console.error('There was an error fetching the events!', error);
          });
  }, []);
  const featuredEvents = events.slice(0, 3);
  const regularEvents = events.slice(3);

  return (
    <div className="home-page">
      <div className="heading">
        <h1>Welcome to Club Hub</h1>
        <p>Discover events from various clubs happening around you!</p>
      </div>
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
              <img src={`https://picsum.photos/800/400?random=${event.event_id}`} />
              <div className="carousel-caption">
                <h2>{event.club_name}</h2>
                <h3>{event.event_name}</h3>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="events-container">
        {regularEvents.map((event) => (
          <div key={event.event_id} className="event-card">
            <img src={`https://picsum.photos/400/200?random=${event.event_id}`}/>
            <h2>{event.club_name}</h2>
            <h4>{event.event_name}</h4>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p>{event.description}</p>
            <button className="join-button">Join Event</button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
