import { Square } from "./Square";

export const ResultPopUp = ({ winner, resetGame }) => {
  // si el prop winner es nulo el componente no renderiza nada
  if (winner === null) return null;

  const winnerText = winner === false ? "Draw!" : `${winner} won!`;

  return (
    <div className="resultPopUp-container">
      <div className="resultPopUp-body">
        <h2>{winnerText}</h2>

        <div className="resultPopUp-square">
            {winner && <Square>{winner}</Square>}
        </div>

        <button onClick={resetGame}>Play again?</button>
      </div>
    </div>
  );
};