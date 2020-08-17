import React, { Component } from 'react';
import Searchbar from '../components/searchbar/Searchbar';
import Loader from '../components/loader/Loader';
import ImageGallery from '../components/imageGallery/ImageGallery';
import ImageGalleryItem from '../components/imageGalleryItem/ImageGalleryItem';
import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';
import axios from 'axios';
// import styles from './App.module.css';
// { id: '', webformatURL: '', largeImageURL: '' }
class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    const KEY_API = '17611748-6d67051009b1653d75232e8c8';
    axios
      .get(
        `https://pixabay.com/api/?q=${'cat'}&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        this.setState({
          images: response.data.hits,
        });
        // console.log(this.state.images);
      })
      .catch(error => this.setState({ error }))
      .finally(() => ({ loading: false }));
  }

  onSubmit = () => {
    //
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        {console.log(images)};
        <Searchbar onSubmit={this.onSubmit} />
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
