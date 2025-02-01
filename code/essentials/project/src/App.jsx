import { useState } from "react";
import Header from "./Components/Header";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/WinningCombinations";
import GameOver from "./Components/GameOver";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//helper function
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  //const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameboard.map(array => [...array])]; //create a copy of the initial gameboard

  //destructuring will give you the player symbol and the row and column selected by the player
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner; 


    function handleSelectSquare(rowIndex, colIndex) {
      //setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
      setGameTurns((prevTurns) => {
        //update the turns so that the first item is always the latest turn
        //to avoid merging states, create a new var to hold the previous player

        const currentPlayer = deriveActivePlayer(prevTurns);

        const updatedTurns = [
          { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
          ...prevTurns,
        ]; //make the game turns an array of objects

        return updatedTurns;
      });
    }

    function handleRematch() {
      setGameTurns([]);
    }

    return (
      <>
        <Header />
        <main>
          <div id="game-container">
            <ol id="players" className="highlight-player">
              <Player
                initialName="Player 1"
                symbol="X"
                isActive={activePlayer === "X"}
              />
              <Player
                initialName="Player 2"
                symbol="O"
                isActive={activePlayer === "O"}
              />
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
            <GameBoard
              onSelectSquare={handleSelectSquare}
              activePlayerSymbol={activePlayer}
              turns={gameTurns}
              board={gameBoard}
            />
          </div>
          <Log turns={gameTurns} />
        </main>
      </>
    );
  }
export default App;
