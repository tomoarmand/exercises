import { useState } from 'react'  // Import useState hook to manage component state
import { useEffect } from 'react'  // Import useEffect hook for side effects
import reactLogo from './assets/react.svg'  // Import React logo (unused in this component)
import viteLogo from '/vite.svg'  // Import Vite logo (unused in this component)
import './App.css'  // Import CSS styles - this should contain dark-theme and light-theme classes

function ThemeToggler() {
  // Initialize state variable for theme status with default value of false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // This useEffect runs only once when the component mounts (empty dependency array)
  // It checks if there's a saved theme preference in localStorage and loads it
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setIsDarkMode(true);  // If darkMode was saved as "true", activate dark mode
    }
  }, []);  // Empty array means run once on component mount

  // This useEffect runs whenever isDarkMode changes
  // It applies the appropriate class to the document body and saves the preference
  useEffect(() => {
    // Apply CSS class to body element based on theme
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";

    // Save current theme preference to localStorage for persistence between sessions
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode])  // Run this effect whenever isDarkMode changes

  
  return (
    // Apply the same theme class to this div container
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <h2>Theme Toggler</h2>
      {/* Button with click handler that toggles theme state */}
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {/* Dynamic button text based on current theme */}
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <p>This content will change appearance based on the theme!</p>
    </div>
  );
}

export default ThemeToggler  // Export the component to be used elsewhere