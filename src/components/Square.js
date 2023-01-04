import React from 'react'

const Square = ({square, index, handleGamePlay}) => {
  const handleClick = () => {
    handleGamePlay(index)
  }
// const handleClick = (i) => {
//   board[i] = isX ? '❌' : '⭕️'
//   setBoard(square)
//   setIsX(!isX)
// }
const winningSquares = (square) => {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i=0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a]
    }
  }
  return null
}

  return (
    <div className="square" onClick={handleClick}>{square}</div>
  )
}
export default Square
