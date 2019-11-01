import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from '../../redux/session/sessionOperations';
import { addBooks } from '../../redux/books/booksActions';
import HeaderContainer from '../../components/Header/HeaderContainer';
import AddBook from '../../components/AddBook/AddBookContainer';
import BookList from '../../components/BooksList/BoolksListContainer';
import css from './LibraryPage.module.css';
import books from './books';

class LibraryPage extends Component {
  componentDidMount() {
    this.props.registration(this.props.location.search);
    localStorage.setItem('token', this.props.location.search);
    books.forEach(book => this.props.addBooks(book));
  }

  render() {
    return (
      <div>
        <HeaderContainer name="Martha Stewart" />
        <main className="container">
          <div className={css.library}>
            <h2>LibraryPage</h2>
            <AddBook />
            <h3>Book List</h3>
            <BookList />
            <h3>Summary Modal</h3>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  registration,
  addBooks,
};

export default connect(
  null,
  mapDispatchToProps,
)(LibraryPage);
