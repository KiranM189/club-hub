import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ClubProfile.css';

const ClubProfile = () => {
    const [club, setClub] = useState(null);
    const { clubId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5050/clubs/${clubId}`)
            .then(response => {
                const clubData = response.data;
                clubData.founded_date = new Date(clubData.founded_date);
                setClub(clubData);
            })
            .catch(error => {
                console.error('There was an error fetching the club data!', error);
            });
    }, [clubId]);

    return (
        <div className="club-profile-container">
            {club && (
            <div className="container1">
                <div className="header">
                    <img src={`https://picsum.photos/400/200?random=${clubId}`} alt="{club.name}" className="logo" />
                    <div className="header-text">
                        <h1 className="title">{club.name}</h1>
                        <p className="description">{club.description}</p>
                        <p className="founded">Founded: {club.founded_date.toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="footer1">
                    <div className="information">
                        <p className="info">🎓 PESU {club.campus} Campus</p>
                        <span className="views">👁️ Viewed : {club.viewed}</span>
                    </div>
                </div>
            </div>)}
            {club && club['members'] && club['members'].length > 0 && (
                <div className="py-24 sm:py-32">
                    <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-xl">
                            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                Meet our leadership
                            </h2>
                            <p className="mt-6 text-lg/8 text-gray-300">
                                We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                                best results for our clients.
                            </p>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 ">
                            {club['members'].map((person) => (
                                <li key={person.member_id}>
                                    <div className="flex items-center gap-x-6">
                                        <img alt="" src={`https://i.pravatar.cc/?img=${person.member_id}`} className="h-16 w-16 rounded-full" />
                                        <div>
                                            <h3 className="text-base/7 font-semibold tracking-tight text-white">{person.first_name + ' ' + person.last_name}</h3>
                                            <p className="text-sm/6 font-semibold text-white">{person.position}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClubProfile;