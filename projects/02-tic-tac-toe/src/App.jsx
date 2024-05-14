import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './logic/constants'
import { checkWinnerFrom } from './logic/board'
import confetti from "canvas-confetti"
import { saveGametoStorage, resetGameStorage } from './logic/storage'

function App() {

  const [board, setBoard] = useState( () => { 
    // Check if there is a board in local storage
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  } )

  // null means no winner, false means draw
  const [winner, setWinner] = useState(null)
  
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }


  const updateBoard = (index) => {
    //Dont update if winner or if square is filled
    if (board[index] || winner) return
    
    // Update board
    const newBoard = [ ... board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Save game to local storage
    saveGametoStorage({
      board: newBoard, 
      turn: newTurn
    })

    // Check winner
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)      
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
    
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset game?</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected ={turn === TURNS.X}> 
          {TURNS.X}
        </Square>
        <Square isSelected ={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      
      {/* Conditional rendering */}
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Draw!' : 'Won!:'
                }
              </h2>
              
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Play again?</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}  

export default App
