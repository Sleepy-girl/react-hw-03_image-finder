import React from 'react';
import styles from './button.module.css';

function Button() {
  return (
    <>
      <button type="button" className={styles.Button}>
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
