import React from 'react';
// import Modal from '../modal/Modal';
import styles from './imageGalleryItem.module.css';

function ImageGalleryItem({ images, showMadal, onClick }) {
  return (
    <>
      {images.map(image => (
        <li
          key={image.id}
          className={styles.ImageGalleryItem}
          onClick={() => onClick(image.largeImageURL)}
        >
          <img
            src={image.webformatURL}
            alt=""
            className={styles.ImageGalleryItemImage}
          />
          {/* {showMadal && <Modal src={image.largeImageURL} onClick={onClick} />} */}
        </li>
      ))}
    </>
  );
}

export default ImageGalleryItem;
