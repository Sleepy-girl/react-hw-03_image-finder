import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
  state: [];

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Loader />
        <Button />
        <Modal />
      </>
    );
  }
}

export default App;
