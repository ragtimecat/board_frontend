import { useEffect, useState } from 'react';

const Board = (params) => {
  const [board, setBoard] = useState({});

  useEffect(() => {
    const fetchBoardInfo = async () => {
      const results = await fetch(`http://localhost:5000/api/v1/boards/${params.match.params.board_id}`);
      const boardInfo = await results.json();
      setBoard(boardInfo.data);
    }
    fetchBoardInfo();
  }, [params])
  return (
    <div>
      Board

      <p>{board.name}</p>
      
      <p>description: {board.description}</p>
    </div>
  )
}

export default Board
