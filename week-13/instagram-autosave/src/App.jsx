import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Initialize state with values from localStorage
function InstagramProfileForm() {
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [bio, setBio] = useState(() => localStorage.getItem("bio") || "");
  const [website, setWebsite] = useState(() => localStorage.getItem("website") || "");
  
  // Save username to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("username", username);
   }, [username]);
  
   // Save bio to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("bio", bio);
   }, [bio]);

   // Save website to localStorage when it changes
   useEffect(() => {
    localStorage.setItem("website", website);
   }, [website]);
  
  return (
    <div className="instagram-profile">
      <h2>Edit Profile</h2>
      <div className="form-group">
        <label>Username</label>
        <input 
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      
      <div className="form-group">
        <label>Bio</label>
        <textarea 
          value={bio}
          onChange={e => setBio(e.target.value)}
          placeholder="Write a short bio..."
        />
      </div>
      
      <div className="form-group">
        <label>Website</label>
        <input 
          type="url"
          value={website}
          onChange={e => setWebsite(e.target.value)}
          placeholder="https://example.com"
        />
      </div>
      
      <p className="auto-save-hint">All changes are saved automatically</p>
    </div>
  );
}

export default InstagramProfileForm