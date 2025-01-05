import { useState } from "react";

/**
 * Player component
 */
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text" required /> : playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>edit</button>
    </li>
  );
}
