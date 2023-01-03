import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [square, setSquare] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true);
    const handleClick = () => {
      if
    }

  // const handleGamePlay= (clickedSquare) => {
  //   let updateBoard =[...board]
  //   if(updateBoard[clickedSquare] === "❌"){
  //     updateBoard[clickedSquare]= "⭕️"
  //     setBoard(updateBoard)
  //   }else{
  //   updateBoard[clickedSquare]= "❌"
  //   setBoard(updateBoard)
  //   }
  // }
    const renderSquare = (i) => {
      return <Square value={squares[i] onClick={()=> handleClick(i)} />
    }
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