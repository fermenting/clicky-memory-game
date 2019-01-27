import React from "react";
import "./style.css";

function Score(props) {
  return <h2 className="score">{props.children}</h2>;
}

export default Score;
