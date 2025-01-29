import React, { act } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSelectSquare, turns }) {
  let gameboard = initialGameboard;

  //destructuring will give you the player symbol and the row and column selected by the player
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }
  // const [gameboard, setGameboard] = useState(initialGameboard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameboard((prevGameBoard) => {
  //     const updatedGameboard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //     updatedGameboard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameboard;
  //   });

  //   onSelectSquare(); //this should be a function
  // }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() =>onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
