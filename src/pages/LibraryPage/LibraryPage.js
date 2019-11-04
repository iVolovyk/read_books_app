import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import * as booksActions from '../../redux/books/booksActions';
// Google Login
import * as sessionActions from '../../redux/session/sessionActions';
import * as sessionOperations from '../../redux/session/sessionOperations';
import { getIsAuthenticated } from '../../redux/session/sessionSelectors';

import AddBook from '../../components/AddBook/AddBookContainer';
import BookList from '../../components/BooksList/BoolksListContainer';
import css from './LibraryPage.module.css';
import books from './books';

class LibraryPage extends Component {
  componentDidMount() {
    const {
      logInWithGoogle,
      logInWithGoogleOperation,
      addBooks,
      history,
      location,
    } = this.props;
    // Google login
    if (location.search) {
      const search = queryString.parse(location.search);
      logInWithGoogle(search.token);
      logInWithGoogleOperation();
      history.replace({
        pathname: location.pathname,
        search: '',
      });
    }
    // isAuthenticated redirect
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      history.replace('/login');
    }
    books.forEach(book => addBooks(book));
  }

  componentDidUpdate() {
    // Logout redirect
    const { isAuthenticated, history } = this.props;
    if (!isAuthenticated) {
      history.replace('/login');
    }
  }

  render() {
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

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  logInWithGoogle: token => dispatch(sessionActions.logInWithGoogle(token)),
  logInWithGoogleOperation: () =>
    dispatch(sessionOperations.logInWithGoogleOperation()),
  addBooks: () => dispatch(booksActions.addBooks()),
});

LibraryPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logInWithGoogle: PropTypes.func.isRequired,
  addBooks: PropTypes.func.isRequired,
  logInWithGoogleOperation: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LibraryPage);
