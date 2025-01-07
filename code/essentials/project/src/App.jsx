import { useState } from "react";
import Header from "./Components/Header";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";



function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');  
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
