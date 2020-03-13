import React from "react";
import "./card.style.css";
export const Card = props => (
  <div className="card-container">
    <img
      height="180px"
      width="180px"
      src={`https://robohash.org/${props.monster.id}?set=set2`}
      alt="monster"
    ></img>
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
  </div>
);
