import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      country: '',
      city: '',
      address: '',
      zipcode: '',
      picture: '',
      idCardPicture: '',
      passcode: '',
    });
  
    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    );
  };

// Custom hook to use the UserContext
export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };