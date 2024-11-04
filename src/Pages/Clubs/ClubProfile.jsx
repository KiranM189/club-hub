import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ClubProfile = () => {
    const [club, setClub] = useState(null);
    const { clubId } = useParams();

    useEffect(() => {
        console.log(clubId);
        axios.get(`http://localhost:5050/clubs/${clubId}`)
            .then(response => {
                setClub(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the club data!', error);
            });
    }, [clubId]);

    return (
        <div className="club-profile-container">
            {club ? (
                <>
                    <div className="club-profile-header bg-blue-500 text-white p-4">
                        <h1 className="text-3xl font-bold">{club.name}</h1>
                    </div>
                    <div className="club-profile-content p-4">
                        <p><strong>Description:</strong> {club.description}</p>
                        <p><strong>Founded:</strong> {new Date(club.founded_date).toLocaleDateString()}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ClubProfile;