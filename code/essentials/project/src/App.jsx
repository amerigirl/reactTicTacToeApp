import Header from "./Components/header";
import Player from "./Components/Player";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>
          GAME BOARD
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
