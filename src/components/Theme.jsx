import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const localData = localStorage.getItem('darkMode');
        return localData ? JSON.parse(localData) : false;
    });

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'darkMode') {
                setDarkMode(JSON.parse(e.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const handleClick = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, handleClick }}>
            {children}
        </ThemeContext.Provider>
    );
};
