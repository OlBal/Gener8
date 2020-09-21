import React from "react";
import { players } from "./index";

const PlayerList = ({ players }) => (
  <ul className="playerListGroup">
    {players.map((item, index) => (
      <li className="playerList" key={index}>
        {item}
      </li>
    ))}
  </ul>
);

export default PlayerList;
