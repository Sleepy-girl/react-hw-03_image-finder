import React from 'react';
import axios from 'axios';

import styles from './imageGallery.module.css';

function ImageGallery({ images, children }) {
  return (
    <>
      {/* {console.log(images)} */}
      <ul className={styles.ImageGallery}>
        {/* {images.map(image => (
          <li key={image.id} className={styles.ImageGalleryItem}>
            <img
              src={image.previewURL}
              alt=""
              className={styles.ImageGalleryItemImage}
              width={150}
            />
          </li>
        ))} */}
        {children}
      </ul>
    </>
  );
}

export default ImageGallery;
