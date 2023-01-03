import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))

  const handleGamePlay= (clickedSquare) => {
    let updateBoard =[...board]
    updateBoard[clickedSquare]= "❌"
    setBoard(updateBoard)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((square, index) => {
          return (
            <Square 
            square={square}
            index={index}
            handleGamePlay={handleGamePlay}
            />
      
          )
        })
        
      
      }

      </div>
    </>
  )
}

export default App