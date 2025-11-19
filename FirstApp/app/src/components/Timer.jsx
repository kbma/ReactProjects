//src/components/Timer.jsx
import { useState, useEffect } from "react";
 
export default function Timer(){
const [seconds, setSeconds] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((prevSeconds) => prevSeconds + 1);
  }, 1000); 
    return () => clearInterval(interval);
 
}, []);
 
return (
  <div>
    <h1>Timer: {seconds} seconds</h1>
    <button onClick={() => setSeconds(0)}>Reset</button>
  </div>
);
}
 
