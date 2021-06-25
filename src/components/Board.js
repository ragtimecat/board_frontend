import { useEffect, useState } from 'react';

const Board = (params) => {
  const [board, setBoard] = useState({});

  useEffect(() => {
    const fetchBoardInfo = async () => {
      const results = await fetch(`http://localhost:5000/api/v1/boards/${params.match.params.board_id}`);
      const boardInfo = await results.json();
      console.log(boardInfo);
      if (boardInfo.success) {
        console.log('board succussfuly found');
        setBoard(boardInfo.data);
      } else {
        console.log('board bot found')
        setBoard({name: 'NotFound', description: 'There is no board'});
      }
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

export default Board;
