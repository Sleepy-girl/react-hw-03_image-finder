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
    page: 0,
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
      // console.log('можно делать запрос');
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

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

  render() {
    const { images, loading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && <span>oops</span>}
        {this.state.loading ? (
          <Loader loading={loading} />
        ) : (
          <ImageGallery>
            {images.length > 0 && <ImageGalleryItem images={images} />}
            {images.length > 0 && <Button onClick={this.fetchImages} />}
            {/* <Modal /> */}
          </ImageGallery>
        )}
      </>
    );
  }
}

export default App;
