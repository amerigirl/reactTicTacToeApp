import React from "react";
import { useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard() {
  const [gameboard, setGameboard] = useState(initialGameboard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameboard((prevGameBoard) => {
      const updatedGameboard = [...prevGameBoard.map((row) => [...row])];
      updatedGameboard[rowIndex][colIndex] = "X";
      return updatedGameboard;
    });
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
