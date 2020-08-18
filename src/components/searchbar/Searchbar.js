import React, { Component } from 'react';
import styles from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.inputValue);
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm}>
            <button
              type="submit"
              onClick={this.handleSubmit}
              className={styles.SearchFormButton}
            >
              <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={styles.SearchFormInput}
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
              // autocomplete="off"
              // autofocus

              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
