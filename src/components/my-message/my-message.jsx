import React from 'react';

export const MyMessage = ({ message }) => {
  if (message?.attachments?.length) {
    return (<img src={message.attachments[0].file} alt="message-attachment" className="message-attachment" style={{ float: 'right' }} />)
  }
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3b2a50' }}>
      {message.text.replace(/(<([^>]+)>)/gi, "")}
    </div>
  );
};
