import React, { Component } from 'react';
import Searchbar from '../components/searchbar/Searchbar';
import Loader from 'react-loader-spinner';
import ImageGallery from '../components/imageGallery/ImageGallery';
import ImageGalleryItem from '../components/imageGalleryItem/ImageGalleryItem';
import Button from '../components/button/Button';
import imagesApi from '../service/imagesApi';
import Modal from '../components/modal/Modal';

import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 0,
    largeImageURL: null,
    showModal: false,
  };

  // componentDidMount() {
  //   // this.setState({
  //   //   loading: true,
  //   // });
  //   // this.fetchImages();
  // }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages(); //запрос
      // window.addEventListener('scroll', this.handleScroll);
    }
  }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = e => {
  //   if (this.state.images.length > 0) {
  //     scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  fetchImages = () => {
    const { searchQuery } = this.state;

    this.setState({ loading: true });

    imagesApi
      .fetchImagesWithQuery(searchQuery)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({ searchQuery: query, page: 0, images: [] });
  };

  toggleSrc = largeImageURL => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL: largeImageURL,
    }));
    console.log('toggleSrc');
  };

  closeModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL: null,
    }));
    console.log('toggleSrc');
  };

  render() {
    const { images, loading, error, showModal, largeImageURL } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && <span>Error. Something went wrong</span>}
        <ImageGallery>
          {images.length > 0 && (
            <ImageGalleryItem images={images} onClick={this.toggleSrc} />
          )}
          {images.length > 0 && !loading && (
            <Button onClick={this.fetchImages} />
          )}
          {showModal && (
            <Modal imageLarge={largeImageURL} onClose={this.closeModal} />
          )}
          {/* {largeImageURL && <Modal />} */}
        </ImageGallery>
        {loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            // timeout={3000}
          />
        )}
      </div>
    );
  }
}

export default App;
