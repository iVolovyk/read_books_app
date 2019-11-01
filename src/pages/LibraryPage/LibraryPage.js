import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import * as booksActions from '../../redux/books/booksActions';
// Google Login
import * as sessionActions from '../../redux/session/sessionActions';
import logInWithGoogleOperation from '../../redux/session/sessionOperations';

import AddBook from '../../components/AddBook/AddBookContainer';
import BookList from '../../components/BooksList/BoolksListContainer';
import css from './LibraryPage.module.css';
import books from './books';

class LibraryPage extends Component {
  componentDidMount() {
    const {
      location,
      logInWithGoogle,
      logInWithGoogleHandler,
      addBooks,
    } = this.props;
    // Google login
    if (location.search) {
      const search = queryString.parse(location.search);
      logInWithGoogle(search.token);
      logInWithGoogleHandler();
    }
    books.forEach(book => addBooks(book));
  }

  render() {
    // const { onLogOut } = this.props;
    return (
      <div>
        <main>
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

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {
//   logInWithGoogle,
//   logInWithGoogleOperation,
// };

const mapDispatchToProps = dispatch => ({
  logInWithGoogle: token => dispatch(sessionActions.logInWithGoogle(token)),
  logInWithGoogleHandler: () => dispatch(logInWithGoogleOperation()),
  // onLogOut: () => dispatch(sessionActions.logOut()),
  addBooks: () => dispatch(booksActions.addBooks()),
});

LibraryPage.defaultProps = {
  location: {},
};

LibraryPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  // onLogOut: PropTypes.func.isRequired,
  logInWithGoogle: PropTypes.func.isRequired,
  addBooks: PropTypes.func.isRequired,
  logInWithGoogleHandler: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(LibraryPage);
