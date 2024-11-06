import React from 'react';
import './ProfilePage.css'; 
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import profile_img from '../../assets/profile-icon-png-898.png'
const ProfilePage = () => {
    const { user } = useContext(UserContext);
    const formData = user;
  return (
    <div className='home-page'>
        <div className="heading">
            <h1>Your Profile</h1>
            <p>{formData.name}'s Profile</p>
        </div>
      <div className="profileCard">
        <div>
        {/* <h2>{formData.name}'s Profile</h2> */}
        <div className="profileRow">
          <strong>Full Name: </strong>
          <span>{formData.name}</span>
        </div>
        <div className="profileRow">
          <strong>SRN: </strong>
          <span>{formData.srn}</span>
        </div>
        <div className="profileRow">
          <strong>Gender: </strong>
          <span>{formData.gender}</span>
        </div>
        <div className="profileRow">
          <strong>Email: </strong>
          <span>{formData.email}</span>
        </div>
        <div className="profileRow">
          <strong>Contact: </strong>
          <span>{formData.contact}</span>
        </div>
        <div className="profileRow">
          <strong>Campus: </strong>
          <span>{formData.campus}</span>
        </div>
        <div className="profileRow">
          <strong>Year: </strong>
          <span>{formData.year}</span>
        </div>
        <div className="profileRow">
          <strong>Specialization: </strong>
          <span>{formData.specialization}</span>
        </div>
        <div className="profileRow">
          <strong>About: </strong>
          <span>{formData.about}</span>
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
