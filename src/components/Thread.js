import { useEffect, useState } from 'react';

const Thread = (params) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const result = await fetch(`http://localhost:5000/api/v1/threads/${params.match.params.thread_id}/messages`);
      const response = await result.json();

      console.log(response.data);
      setMessages(response.data);
    }
    fetchMessages();
  }, [params]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const submitResult = await fetch(`http://localhost:5000/api/v1/threads/${params.match.params.thread_id}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: newMessage
      })
    }) ;
    const submitResponse = await submitResult.json();
    setMessages(messages => [...messages, submitResponse.data])
    
    setNewMessage('');
    console.log(messages.length);
  }

  const onNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  } 

  const onMessageDelete = async (id) => {
    const result = await fetch(`http://localhost:5000/api/v1/messages/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });

    const response = await result.json();
    if(response.success) {
      const newMessages = messages.filter(message => message._id !== id);
      setMessages(messages => newMessages);
    }
  }

  return(
    <div className="thread">
      <div className="messages">
        {messages.length > 0 ? (
          messages.map(message => (
            <p className="message" key={message._id}>{message.text}<span onClick={() => onMessageDelete(message._id)} className="delete-symbol">X</span></p>
          ))
        ) : <p>No data</p>}
      </div>
      <form onSubmit={onFormSubmit}>
        <label>Message</label>
        <input type="text" value={newMessage} onChange={onNewMessageChange} />
        <input type="submit" value="Add Message" />
      </form>
    </div>
  )
}

export default Thread;