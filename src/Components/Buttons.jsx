import React from "react";

const Buttons = (props) => {
  const handleIncrement = () => {
    props.setCount(props.count + 1);
  };

  const handleDecrement = () => {
    if (props.count === 0) {
      return;
    }
    props.setCount(props.count - 1);
  };

  return (
    <>
      <div className="likeContainer">
        <div className="likeButtons">
          <div className="likePositive">
            <p className="likeEmoji" onClick={() => handleIncrement()}>
              &#128514;
            </p>
            <div className="likeTextContainer">
              {props.count && <p className="likedText">{props.count}</p>}
            </div>
          </div>

          <p className="pooEmoji" onClick={() => handleDecrement()}>
            &#128169;
          </p>
        </div>
      </div>
    </>
  );
};

export default Buttons;
