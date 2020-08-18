import React, { Component } from 'react';
import Searchbar from '../components/searchbar/Searchbar';
import Loader from '../components/loader/Loader';
import ImageGallery from '../components/imageGallery/ImageGallery';
import ImageGalleryItem from '../components/imageGalleryItem/ImageGalleryItem';
import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';
import imagesApi from '../service/imagesApi';

// import styles from './App.module.css';
// { id: '', webformatURL: '', largeImageURL: '' }
class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: '',
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });

    this.fetchImages('car');
  }

  fetchImages = query => {
    imagesApi
      .fetchImagesWithQuery(query)
      .then(images => this.setState({ images }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        {console.log(images)};
        <Searchbar onSubmit={this.fetchImages} />
        {/* {error && <span>oops</span>} */}
        {/* {this.state.loading ? (
          <Loader loading={loading} />
        ) : ( */}
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
        {/* )} */}
        {/* {images.length > 0 && ( */}
        {/* <Button />
        <Modal /> */}
      </>
    );
  }
}

export default App;
