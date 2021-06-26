import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      const results = await fetch('http://localhost:5000/api/v1/boards');
      const boards = await results.json();

      setBoards(boards.data);
      console.log(boards);
    }
    fetchBoards();
    
    console.log(boards);
  }, []);

  return(
    <div className="sidebar">
      <Link to="/create-board">Create Board</Link>
      {boards.length > 0 ? (
      <ul>
        {boards.map(board => (
          <li key={board._id}><Link to={`/${board._id}`}>{board.name}</Link></li>
        ))}
      </ul>)
      : (<p>No data</p>)}
      
    </div>
  );
}

export default Sidebar;