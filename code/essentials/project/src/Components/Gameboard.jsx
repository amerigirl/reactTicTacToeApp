import React, { act } from "react";


export default function Gameboard({ onSelectSquare, board }) {

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
      {board.map((row, rowIndex) => (
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
