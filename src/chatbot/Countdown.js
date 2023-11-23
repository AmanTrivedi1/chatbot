import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Render the countdown
  return (
    <div>
      {" "}
      You will be redirect in {seconds > 0 ? <h1>{seconds}</h1> : <h1>Go!</h1>}
    </div>
  );
};

export default Countdown;
