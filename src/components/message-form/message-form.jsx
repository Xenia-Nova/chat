import React, { useState } from 'react';
import { sendMessage, isTyping, NewMessageForm } from 'react-chat-engine'
import { IoMdSend } from 'react-icons/io';
import { AiFillPicture } from 'react-icons/ai';

export const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;
  console.log(creds);
  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();

    if (text.length) sendMessage(creds, chatId, { text, sender_username: creds.userName })
    setValue('')
  }

  const handleChange = (event) => {
    setValue(event.target.value)
    isTyping(props, chatId)
  }

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' })
  }

  return (
    <form action="" className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Send a message"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span>
          <AiFillPicture className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      <button type="submit" className='send-button'>
        <IoMdSend className='send-icon' />
      </button>

    </form>
  // <NewMessageForm {...props}/>
  );
};
