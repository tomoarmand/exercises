import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Clock() {
  const [time, setTime] = useState(new Date());
  // const [count, setCount] = useState(0)
  
  const startClock = () => {
      setInterval(() => {
        setTime(new Date())
      }, 1000)
  }

  // useEffect(() => {
  //   console.log(count)
  // }, [count])
  
  return (
    <div>
      <button onClick={startClock}>Start Clock</button>
      <h2>Current time: {time.toLocaleTimeString()}</h2>
      <p>This clock updates every second</p>
    </div>
  );
}

export default Clock
