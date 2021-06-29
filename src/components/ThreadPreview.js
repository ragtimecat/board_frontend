import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import APIService from '../services/APIService';

const ThreadPreview = ({ title, thread_id, board_id, onThreadDelete }) => {
  const [messages, setMessages] = useState([]);

  const apiService = new APIService();

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await apiService.getMessagesByThreadId(thread_id);
      setMessages(messages.data);
    }
    fetchMessages();
  }, []);

  

  return(
    <div className="thread">
      <Link to={`/${board_id}/${thread_id}`}>Go to thread</Link><button onClick={() => onThreadDelete(thread_id)} className="delete-thread">Delete Thread</button>
      <p className="title">Title: {title}</p>
      <p>Messages</p>
      <div className="messages">
        {messages.length > 0 && (
          messages.map(message => (
            <p className="message" key={message._id}>{message.text}</p>
          ))
        )}
      </div>
    </div>
  )
}

export default ThreadPreview;