import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("cleanup du timer");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>{time}</p>
    </div>
  );
};

export default Clock;
