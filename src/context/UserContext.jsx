// src/contexts/UserContext.js
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      name: '',
      srn: '',
      gender: '',
      email: '',
      contact: '',
      campus: '',
      year: '',
      specialization: '',
    };
  });

  // Save user data to localStorage whenever user state changes
  useEffect(() => {
    if (user && user.email) { // Only save if there's valid user data
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user'); // Clear if no user
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
