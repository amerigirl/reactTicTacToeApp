import { useState } from "react";
import Header from "./Components/Header";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/WinningCombinations";
import GameOver from "./Components/GameOver";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
}
const INITIAL_GAME_BOARD = [
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

function deriveWinner(gameBoard, players) {
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
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; //create a copy of the initial gameboard

  //destructuring will give you the player symbol and the row and column selected by the player
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
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

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName={players.X}
              symbol="X"
              isActive={activePlayer === "X"}
              onChangeName={handlePlayerNameChange}
            />
            <Player
              initialName={players.O}
              symbol="O"
              isActive={activePlayer === "O"}
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRematch={handleRematch} />
          )}
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
