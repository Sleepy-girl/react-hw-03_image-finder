import React from 'react';
import axios from 'axios';

import styles from './imageGallery.module.css';

function ImageGallery({ children }) {
  return (
    <>
      <ul className={styles.ImageGallery}>{children}</ul>
    </>
  );
}

export default ImageGallery;
