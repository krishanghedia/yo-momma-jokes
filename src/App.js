import React from "react";
import { useState, useEffect } from "react";
import { useInterval } from "usehooks-ts";
import { jokes } from "./jokes";
import HeaderContent from "./Components/HeaderContent";
import Buttons from "./Components/Buttons";
import YoMommaLogo from "./Images/YoMommaLogo.png";
import Countdown from "./Components/Countdown";

let currentUpdate;
const App = () => {
  // const [joke, setJoke] = useState([]);
  const [count, setCount] = useState(0);
  const [lastJokeDateTime, setlastJokeDateTime] = useState(0);
  const [update, setUpdate] = useState(false);

  currentUpdate = update;

  const NEW_JOKE_TIMER = 5000;

  useEffect(() => {
    // get a new joke every 5 seconds
    setInterval(() => {
      setlastJokeDateTime(Date.now());
    }, NEW_JOKE_TIMER);
  }, []);

  const currentJoke = jokes[Math.floor(Math.random() * jokes.length)];

  return (
    <>
      <div className="header">
        <img src={YoMommaLogo} alt="comic-style app logo"></img>
        <HeaderContent />
      </div>

      <div className="bubble">
        <p>"{currentJoke}"</p>
      </div>
      <Buttons count={count} setCount={setCount} />
      <div className="nextJokeTimer">
        <Countdown
          lastJokeDateTime={lastJokeDateTime}
          setlastJokeDateTime={setlastJokeDateTime}
        />
      </div>
    </>
  );
};

export default App;
