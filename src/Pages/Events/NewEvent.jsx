import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx'; 
import axios from 'axios';

export default function NewClub() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    club_id: user.id,
    event_name: '',
    description_small: '',
    description_large: '',
    venue: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Add this to prevent form from refreshing
    console.log(user.id);
    axios.post('http://localhost:5050/newevent', formData)
      .then(response => {
        console.log('Club created successfully!', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error creating the club!', error);
      });
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen  p-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
          <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-2xl font-semibold leading-9 text-white">New Event</h1>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              
              <div className="col-span-full">
                <label htmlFor="description_small" className="block text-sm font-medium leading-6 text-white">
                  Theme
                </label>
                <div className="mt-2">
                  <textarea
                    id="description_small"
                    name="description_small"
                    rows={1}
                    value={formData.description_small}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-400">Write a few sentences about the event.</p>
              </div>

              <div className="col-span-full">
                <label htmlFor="description_large" className="block text-sm font-medium leading-6 text-white">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description_large"
                    name="description_large"
                    rows={3}
                    value={formData.description_large}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-400">Write a few sentences about the event.</p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white">Event Details</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="event_name" className="block text-sm font-medium leading-6 text-white">
                  Event Name
                </label>
                <div className="mt-2">
                  <input
                    id="event_name"
                    name="event_name"
                    type="text"
                    value={formData.event_name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="start_date" className="block text-sm font-medium leading-6 text-white">
                  Start Date
                </label>
                <div className="mt-2">
                  <input
                    id="start_date"
                    name="start_date"
                    type="date"
                    value={formData.start_date}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="end_date" className="block text-sm font-medium leading-6 text-white">
                  End Date
                </label>
                <div className="mt-2">
                  <input
                    id="end_date"
                    name="end_date"
                    type="date"
                    value={formData.end_date}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="start_time" className="block text-sm font-medium leading-6 text-white">
                  Start Time
                </label>
                <div className="mt-2">
                  <input
                    id="start_time"
                    name="start_time"
                    type="time"
                    value={formData.start_time}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="end_time" className="block text-sm font-medium leading-6 text-white">
                  End Time
                </label>
                <div className="mt-2">
                  <input
                    id="end_time"
                    name="end_time"
                    type="time"
                    value={formData.end_time}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required/>
                </div>
              </div>
              <div className="sm:col-span-3 sm:col-start-1">
                <label htmlFor="venue" className="block text-sm font-medium leading-6 text-white">
                  Venue
                </label>
                <div className="mt-2">
                  <input
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required/>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={(e)=>{
              navigate('/')
            }}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
           type="button">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}