import { useState } from 'react';

const Signin = () => {
  const [login, setLogin] = useState('admin');
  const [password, setPassword] = useState('12345');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetch('http://localhost:5000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // credentials: 'same-origin',
      credentials: 'include',
      body: JSON.stringify({
        login: login,
        password: password,
      })
    });

    const response = await result.json();
    console.log(response);
  }

  const onLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="sign-form">
      <label htmlFor="">Login</label>
      <input type="text" value={login} onChange={onLoginChange}/>
      <label htmlFor="">Password</label>
      <input type="text" value={password} onChange={onPasswordChange}/>
      <input type="submit" value="submit" />
    </form>
  )
}

export default Signin;