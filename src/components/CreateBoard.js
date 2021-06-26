import { useState } from 'react';
import { useCookies } from 'react-cookie';

const CreateBoard = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch('http://localhost:5000/api/v1/boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description
      })
    })
    const response = await result.json();
    console.log(response);
  }

  return(
    <form onSubmit={onSubmit} className="form">
      <label htmlFor="">Board Name</label>
      <input type="text" onChange={onNameChange} value={name} />
      <label htmlFor="">Description</label>
      <input type="text" onChange={onDescriptionChange} value={description} />
      <input type="submit" value="Create" />
    </form>
  )
}

export default CreateBoard;