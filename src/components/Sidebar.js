import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import APIService from "../services/APIService";

const Sidebar = () => {
  const [boards, setBoards] = useState([]);

  const apiService = new APIService();

  useEffect(() => {
    const fetchBoards = async () => {
      const boards = await apiService.getBoards();

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