import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TitleUpdater() {
  const [title, setTitle] = useState("");
  
  

  // Add your useEffect here
  useEffect(() => {
    
    const originalTitle = document.title;
    
    document.title = title || originalTitle;
    // If title was null, which is falsy, then document.title = originalTitle 

    return () => {
      document.title = originalTitle;
    };
  }, [title]);
  
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Type a page title"
      />
      <p>Check your browser tab to see the title change!</p>
    </div>
  );
}

export default TitleUpdater
