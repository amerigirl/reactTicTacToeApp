import { useState } from "react";

/**
 * Player component
 */
export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);


  function handleEditClick() {
    setIsEditing((editing) => !editing); //add the function call to deal with possible schedule issues

  }


//   let editiblePlayerName = <span className="player-name">{playerName}</span>;

  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text" required /> : playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
