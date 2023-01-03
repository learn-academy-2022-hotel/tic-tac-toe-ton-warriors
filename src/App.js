import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))

  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((square) => {
          return (
            <Square square={square} />
      
          )
        })
        
      
      }

      </div>
    </>
  )
}

export default App