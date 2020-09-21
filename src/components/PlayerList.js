import React from "react";
const List = (props) => (
  <ul>
    {props.players.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default List;
