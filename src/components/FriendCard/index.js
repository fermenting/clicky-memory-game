import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="giphy gif sticker" src={props.image} />
      </div>
      <div onClick={() => props.markIt(props.id)} className="guess">
      ⬚
      </div>
    </div>
  );
}

export default FriendCard;
