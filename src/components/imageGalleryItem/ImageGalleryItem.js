import React from 'react';
import styles from './imageGalleryItem.module.css';

function ImageGalleryItem({ images }) {
  return (
    <>
      {/* {console.log({ images })}; */}
      {images.map(image => (
        <li key={image.id} className={styles.ImageGalleryItem}>
          <img
            src={image.webformatURL}
            alt=""
            className={styles.ImageGalleryItemImage}
          />
        </li>
      ))}
    </>
  );
}

export default ImageGalleryItem;
