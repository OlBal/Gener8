import React from "react";
const PlayerList = (props, { listItem, listGroup }) => (
  <ul className={listGroup}>
    {props.players.map((item, index) => (
      <li className={listItem} key={index}>
        {item}
      </li>
    ))}
  </ul>
);

export default PlayerList;
