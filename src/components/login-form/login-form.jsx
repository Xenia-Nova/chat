import React, { useState } from 'react';
import axios from 'axios';

export const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const authObject = {
      'project-ID': 'abe81f09-f650-478f-8b52-f416f32cfffb',
      'User-Name': userName,
      'User-Secret': password
    }

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      localStorage.setItem('userName', userName)
      localStorage.setItem('password', password)
      window.location.reload()
    } catch (e) {

    }

  }

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1>Chatn APP</h1>
        <form action="" onSubmit={handleSubmitForm}>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
