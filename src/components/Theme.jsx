import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const handleClick = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, handleClick }}>
            {children}
        </ThemeContext.Provider>
    );
};