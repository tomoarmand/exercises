import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function WindowWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  let updateWindowWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth)
    return () => {
      window.removeEventListener("resize", updateWindowWidth)
    }
  })
  
  
  return (
    <div>
      <h2>Window width: {width}px</h2>
      <p>Resize your browser window to see it change!</p>
    </div>
  );
}

export default WindowWidthTracker
