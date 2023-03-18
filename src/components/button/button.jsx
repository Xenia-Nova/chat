import React from 'react';
import styles from './button.module.scss'

export const Button = ({ type, text, disabled = false, onClick = () => {} }) => {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      type={type}
      onClick={onClick}
    >
      {text.toUpperCase()}
    </button>
  );
};
