import React, { useState, useEffect, useContext } from 'react';
import './ProfilePage.css'; 
import { UserContext } from '../../context/UserContext.jsx';
import profile_img from '../../assets/profile-icon-png-898.png';
import axios from 'axios';

const ProfilePage = () => {
    const { user } = useContext(UserContext);
    const formData = user;
    const [profileInfo, setProfileInfo] = useState(); 

    useEffect(() => {
        axios.get(`http://localhost:5050/profile/${user.id}`)
            .then(response => {
                const profile_data = response.data;
                setProfileInfo(profile_data); 
            })
            .catch(error => {
                console.error('There was an error fetching the profile data!', error);
            });
    }, [user.id]); // Dependency on user.id to refetch if it changes
    console.log(profileInfo)
    if (!profileInfo) {
        return <div>Loading...</div>; // A loading message while the data is being fetched
    }

    return (
        <div className='home-page'>
            <div className="heading">
                <h1>Your Profile</h1>
                <p>{formData.name}'s Profile</p>
            </div>
            <div className="profileCard">
                <div>
                    <div className="profileRow">
                        <strong>Full Name: </strong>
                        <span>{formData.name}</span>
                    </div>
                    <div className="profileRow">
                        <strong>SRN: </strong>
                        <span>{profileInfo.srn}</span>
                    </div>
                    <div className="profileRow">
                        <strong>Gender: </strong>
                        <span>{profileInfo.gender}</span>
                    </div>
                    <div className="profileRow">
                        <strong>Email: </strong>
                        <span>{formData.email}</span>
                    </div>
                    <div className="profileRow">
                        <strong>Contact: </strong>
                        <span>{profileInfo.contact}</span>
                    </div>
                    <div className="profileRow">
                        <strong>Campus: </strong>
                        <span>{profileInfo.campus}</span>
                    </div>
                    <div className="profileRow">
                        <strong>Year: </strong>
                        <span>{profileInfo.year_of_graduation}</span>
                    </div>
                    <div className="profileRow">
                        <strong>Specialization: </strong>
                        <span>{profileInfo.specialization}</span>
                    </div>
                    <div className="profileRow">
                        <strong>About: </strong>
                        <span>{profileInfo.about}</span>
                    </div>
                </div>
                <div className="profileImage">
                    <img src={profile_img} alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
