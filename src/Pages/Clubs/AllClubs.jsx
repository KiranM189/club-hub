import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllClubs = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/clubs')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the events!', error);
            });
    }, []);

    return (
        <div className="home-page">
            <div className="events-container">
                {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <img src={`https://picsum.photos/400/200?random=${event.id}`} alt="Event" />
                        <h2>{event.name}</h2>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllClubs;
