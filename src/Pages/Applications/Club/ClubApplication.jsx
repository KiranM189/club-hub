import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ClubApplication() {
  const [applications, setApplications] = useState([]);

  const handleResponse = () => {
    /*axios.post('http://localhost:5050/club-application', formData)
      .then(response => {
        console.log('Club created successfully!', response);
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error creating the club!', error);
      });*/
  };

  useEffect(() => {
    axios.get('http://localhost:5050/club-application')
        .then(response => {
            console.log(response.data);
            setApplications(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the events!', error);
        });
  }, []);

  return (
    <div>
    <h1 className="text-3xl font-bold text-center text-white m-10">Pending Applications</h1>
    <ul role="list" className="divide-y divide-gray-100">
      {applications.map((application) => (
        <li key={application.application_id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg ml-20 mr-20 w-full relative">
            <div className="min-w-1/2 grid-cols-2 flex-auto p-6 w-2/3">
              <p className="text-2xl break-words font-semibold text-white mb-4">{application.club_name}</p>
              <p className="mt-1 break-words text-base text-white mb-4">{application.description}</p>
              <p className="mt-1 break-words text-base text-white">{application.campus}</p>
              <p className="mt-1 break-words text-base text-white">{application.type}</p>
            </div>
            <div className="min-w-1/3 grid-cols-2 flex-auto p-6 w-1/3">
              <p className="text-2xl break-words font-semibold text-white mb-4">{application.first_name + ' ' + application.last_name}</p>
              <p className="mt-1 break-words text-base text-white mb-4">{application.srn}</p>
              <p className="mt-1 break-words text-base text-white">{application.email}</p>
              <p className="mt-1 break-words text-base text-white mb-4">{application.contact}</p>
              <p className="mt-1 break-words text-base text-white">{application.campus}</p>
              <p className="mt-1 break-words text-base text-white">{application.year_of_graduation}</p>
              <p className="mt-1 break-words text-base text-white">{application.specialization}</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex items-center space-x-6">
              <button className="text-green-500 hover:text-green-700 text-2xl font-bold">
                ✓
              </button>
              <button className="text-red-500 hover:text-red-700 text-2xl font-bold">
                ✗
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
