import React from 'react';
import styles from './searchbar.module.css';

function Searchbar({ onSubmit }) {
  return (
    <>
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
          <button
            type="submit"
            onClick={onSubmit}
            className={styles.SearchFormButton}
          >
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}

export default Searchbar;
