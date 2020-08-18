import React from 'react';
import styles from './button.module.css';

function Button({ onClick }) {
  return (
    <>
      <button type="button" className={styles.Button} onClick={onClick}>
        Lord more
      </button>
      {/* window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
      }); */}
    </>
  );
}

export default Button;
