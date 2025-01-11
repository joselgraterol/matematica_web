import React, { createContext, useState, useEffect } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // const [theme, setTheme] = useState("light");
    const [theme, setTheme] = useState(() => {
        // Retrieve the theme from local storage, or default to 'light'
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "light";
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        // Save the current theme to local storage on mount
        //localStorage.setItem("theme", theme);

        // Apply the theme class to the body element
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
