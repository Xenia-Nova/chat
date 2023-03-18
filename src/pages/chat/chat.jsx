import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

import { Button } from '../../components/button/button';
import { HOME } from '../../constants/routesTypes';
import styles from './chat.module.scss';

export const Chat = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    return navigate(HOME)
  }

  return (
    <div className={styles.pageWrapper}>
      <Button text="Log out" onClick={handleLogout} type="button" />
      <ChatEngine
        height='calc(100vh - 50px)'
        projectID='abe81f09-f650-478f-8b52-f416f32cfffb'
        userName='chatAdmin'
        userSecret='Cfvehfq11'
        // renderChatFeed={(catAppProps) => <ChatFeed {...catAppProps} />}
      />
    </div>
  );
};
