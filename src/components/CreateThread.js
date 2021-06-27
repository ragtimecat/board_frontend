import { useState } from 'react';
import { useHistory } from 'react-router-dom';
 
const CreateThread = (params) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const onTitleChange = (e) => {
    setTitle(title => e.target.value);
  }

  const onMessageChange = (e) => {
    setMessage(message => e.target.value);
  }


  const onFormSubmit = async (e) => {
    e.preventDefault();
    
    const result = await fetch(`http://localhost:5000/api/v1/boards/${params.match.params.board_id}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        title,
        message
      })
    })
    const response = await result.json();
    if(response.success) {
      history.push(`/${response.data.board}/${response.data._id}`);
    }
  }

  return(
    <form onSubmit={onFormSubmit} className="form">
      <label>Title</label>
      <input type="text" onChange={onTitleChange} value={title} />
      <label>Message</label>
      <input type="text" onChange={onMessageChange} value={message} />
      <input type="submit" value="Create" />
    </form>
  )
}

export default CreateThread;