// src/context/BackgroundContext.js
'use client';
import { createContext, useContext, useState } from 'react';

 const BackgroundContext = createContext();

 const BackgroundProvider = ({ children }) => {
  // const [BackgroundCount, setBackgroundCount] = useState(0);
  const [background ,setBackground]=useState({});
  return (
    <BackgroundContext.Provider value={{ background ,setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
    const context = useContext(BackgroundContext);
    if (!context) {
      throw new Error("useBackground must be used within a BackgroundProvider");
    }
    return context;
  };

export default BackgroundProvider;