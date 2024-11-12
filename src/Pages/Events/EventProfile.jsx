import React, { useState, useEffect } from 'react';
import './EventProfile.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
const EventProfile = () => {
    const [event_info, setEventInfo] = useState(null); // default to null
    const { eventId } = useParams();
    const { user } = useContext(UserContext);
    useEffect(() => {
        axios.get(`http://localhost:5050/events/${eventId}`)
            .then(response => {
                const eventData = response.data;  // Access response.data directly
                console.log(eventData);
                eventData.date = new Date(eventData.date);
                setEventInfo(eventData);
            })
            .catch(error => {
                console.error('There was an error fetching the event data!', error);
            });
    }, [eventId]);

    if (!event_info) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='event-profile-container'>
                <img src={`https://picsum.photos/400/200?random=${event_info.event_id}`} alt={event_info.event_name} />
                <div className='event-info'>
                    <h1>{event_info.event_name}</h1>
                    <p>Info: {event_info.description_large}</p>
                    <p>Date: {event_info.date.toLocaleDateString()}</p>
                    <p>Location: {event_info.venue}</p>
                    <p>Promo: {event_info.event_promo}</p>
                </div>
            </div>
            {
                    user.isclub && 
                    <div className='participants-table'>
                        <table>
                        <thead>
                            <tr>
                                <th>SRN</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {event_info.participants.map((participant, index) => (
                                <tr key={index}>
                                    <td>{participant.srn}</td>
                                    <td>{participant.first_name + ' ' + participant.last_name}</td>
                                    <td>{participant.email}</td>
                                    <td>{participant.contact}</td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    }
        </div>
    );
};

export default EventProfile;