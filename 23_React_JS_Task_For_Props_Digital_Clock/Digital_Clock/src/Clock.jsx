import { useState, useEffect } from "react";

const Clock = ({color}) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h2 style={{color:color}}>{time}</h2>
    </>
  );
};

export default Clock;
