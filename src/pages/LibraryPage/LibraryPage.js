import React, { Component } from 'react';
import BooksList from '../../components/BooksList/BooksList';

class LibraryPage extends Component {
  state = {};

  render() {
    return (
      <>
        <h2>LibraryPage</h2>

        <BooksList />
      </>
    );
  }
}

export default LibraryPage;
