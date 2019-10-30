import React, { Component } from 'react';
import css from './LibraryPage.module.css';

class LibraryPage extends Component {
  state = {};

  render() {
    return (
      <div className={css.library}>
        <h2>LibraryPage</h2>
        <h3>Header</h3>
        <h3>Add Book</h3>
        <h3>Book List</h3>
        <h3>Summary Modal</h3>
      </div>
    );
  }
}

export default LibraryPage;
