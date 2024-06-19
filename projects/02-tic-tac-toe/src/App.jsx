import { useGameState } from "./hooks/useGameState";
import { Square } from "./components/Square";
import { TURNS } from "./logic/constants";
import { ResultPopUp } from "./components/ResultPopUp";

export function App() {

  const { board, turn, updateBoard, resetGame, winner } = useGameState();

  return (
    <main className="ttt-game">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset game?</button>
      <section className="ttt-game-board">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      {/* Crea las casillas que señalan a que jugador le toca jugar*/}
      <section className="ttt-game-newTurnSquares">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <ResultPopUp resetGame={resetGame} winner={winner} />
    </main>
  );
}