import React from 'react'
import './AllEvents.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
const AllEvents = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [events, setEvents] = useState([]);

    const handleClick = (event_id) => {
        console.log(event_id)
        navigate(`/events/${event_id}`);
    }

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
    const [events_joined, setEvents_joined] = useState([]);
    useEffect(() => {
        if (user && user.id) {  // Ensure user is available before making the request
            axios.get(`http://localhost:5050/joined/${user.id}`)
                .then(response => { 
                    setEvents_joined(response.data); // Assuming setEvents_joined is a state setter for joined events
                })
                .catch(error => {
                    console.error('There was an error in fetching joined events', error);
                });
        }
      }, [user.id]);

    const handleJoin = (event_id) => {
        if(user.name == ""){
            alert("SignIn before joining the event")
            navigate('/signin')
        }
        else{
            axios.post('http://localhost:5050/join', { user_id: user.id, event_id: event_id }, {
            headers: {
                'Content-Type': 'application/json',
            }
            })
            .then((response) => {
            if (response.status === 200) {
                alert(response.data.message);
            } 
            else {
                alert("You have already joined the event");
            }
            })
            .catch((error) => {
            console.error('Error:', error);
            alert("You have already joined the event");
            });
        }
    }
    return (
        <div className="event-page">
            <div className="heading">
                <h1>Welcome to Club Hub</h1>
                <p>Discover events from various clubs happening around you!</p>
            </div>
            <div className="events-container">
            {events.map((event) => (
            <div key={event.event_id} className="event-card" onClick={()=>{handleClick(event.event_id)}}>
                <img src={`https://picsum.photos/400/200?random=${event.event_id}`}/>
                <h2>{event.club_name}</h2>
                <h4>{event.event_name}</h4>
                <p><strong>Date:</strong> {new Date(event.start_date).toLocaleDateString()}</p>
                <p>{event.description_small}</p>
                <button className="join-button" onClick={()=>{handleJoin(event.event_id)}}>
                {events_joined.find(joinedEvent => joinedEvent === event.event_id) ? 'Joined' : 'Join'}
                </button>
            </div>
            ))}
        </div>
      </div>
  )
}

export default AllEvents
