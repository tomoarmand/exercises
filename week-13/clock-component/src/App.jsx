import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Clock() {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0)
  
  // useEffect(() => {
  //   setTime(new Date())
  // }, [time])

  useEffect(() => {
    console.log(count)
  }, [count])
  
  return (
    <div>
      <h2>Current time: {time.toLocaleTimeString()}</h2>
      <p>This clock updates every second</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default Clock
