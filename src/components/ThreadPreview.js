import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ThreadPreview = ({ title, thread_id, board_id, onThreadDelete }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const result = await fetch(`http://localhost:5000/api/v1/threads/${thread_id}/messages`);
      const response = await result.json();

      setMessages(response.data);
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