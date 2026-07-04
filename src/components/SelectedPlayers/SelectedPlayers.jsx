import React from "react";
import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ choosePlayers }) => {
//   console.log(choosePlayers);
  return (
    <div>
      selected
      {choosePlayers.map((choosePlayer) => (
        <SelectedPlayer choosePlayer={choosePlayer} key={choosePlayer.id}></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
