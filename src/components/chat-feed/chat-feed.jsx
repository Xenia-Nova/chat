import React from 'react';
import { MessageForm } from '../message-form/message-form';
import { MyMessage } from '../my-message/my-message';
import { TheirMessage } from '../their-message/their-message';
// import { ChatFeed } from 'react-chat-engine'

export const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map((person, index) => person.last_read === message.id && (
      <div
        key={index}
        className="read-receipt"
        style={{ float: isMyMessage ? 'right' : 'left', backgroundImage: `url(${person?.person?.avatar})`}}
      />
    ))
  }

  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1]
      const isMyMessage = userName === message?.sender?.username;

      return (
        <div key={key} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div className='message-block'>
            {isMyMessage ? <MyMessage message={message} /> : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
          </div>
          <div className='read-receipts' style={{ marginRight: isMyMessage ? '18px' : '0', marginLeft: isMyMessage ? '0' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      )
    })
  }

  if (!chat) return 'Loading...'

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">{chat.people.map(({ person }) => ` ${person.username}`)}</div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className='message-fom-container'>
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};
