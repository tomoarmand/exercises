import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";

    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode])

  
  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <h2>Theme Toggler</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <p>This content will change appearance based on the theme!</p>
    </div>
  );
}

export default ThemeToggler
