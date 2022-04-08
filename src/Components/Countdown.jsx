import React from "react";
import { useState, useEffect } from "react";

let currentUpdate;
const Countdown = (props) => {
  const [update, setUpdate] = useState(false);

  currentUpdate = update;

  useEffect(() => {
    // get a new joke every 5 seconds
    const interval = setInterval(() => {
      setUpdate(!currentUpdate);
    }, 100);
  }, []);

  // console.log(props.lastJokeDateTime + 5000);

  return (
    <>
      <p>
        {Math.round((props.lastJokeDateTime + 5000 - Date.now()) / 1000)}
        &nbsp;seconds until next joke
      </p>
    </>
  );
};

export default Countdown;
