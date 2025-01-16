import React, { act } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard( {onSelectSquare} ) {
  // const [gameboard, setGameboard] = useState(initialGameboard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameboard((prevGameBoard) => {
  //     const updatedGameboard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //     updatedGameboard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameboard;
  //   });

  //   onSelectSquare(); //this should be a function
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
