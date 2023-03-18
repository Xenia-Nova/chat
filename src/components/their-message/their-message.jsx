import React from 'react';

export const TheirMessage = ({ message, lastMessage }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage?.sender?.username === message?.sender?.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length
        ? (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-attachment"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        : (
          <div
            className="message"
            style={{ float: 'left',  color: 'white', backgroundColor: '#cabcdc', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          >
            {message.text.replace(/(<([^>]+)>)/gi, "")}
          </div>
        )
      }
    </div>
  );
};
