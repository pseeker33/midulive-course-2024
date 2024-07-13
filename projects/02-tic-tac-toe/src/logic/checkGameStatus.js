import { WINNER_COMBOS } from "./constants";

export const checkWinner = (boardToCheck) => {
  // Check winner comboes to find winner player
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) return boardToCheck[a];    
  }
  // If no winner
  return null;
};

export const checkDraw = (boardToCheck) => {
  return boardToCheck.every(square => square !== null);
};
