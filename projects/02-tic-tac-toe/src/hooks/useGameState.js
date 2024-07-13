import { useState } from "react";
import { saveGametoStg, removeGameInStg } from "../logic/gameStorage";
import { checkWinner, checkDraw } from "../logic/checkGameStatus";
import { TURNS, EMPTY_BOARD } from "../logic/constants";
import confetti from "canvas-confetti";

export const useGameState = () => {
  const [board, setBoard] = useState(() => {
    const boardFromStg = window.localStorage.getItem("board");
    if (boardFromStg) return JSON.parse(boardFromStg);
    return EMPTY_BOARD;
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStg = window.localStorage.getItem("turn");
    return turnFromStg ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {    
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGametoStg({
      board: newBoard,
      turn: newTurn,
    });

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkDraw(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {

    setBoard(EMPTY_BOARD);
    setTurn(TURNS.X);
    setWinner(null);
    removeGameInStg();
  };

  return { board, turn, winner, updateBoard, resetGame };
};
