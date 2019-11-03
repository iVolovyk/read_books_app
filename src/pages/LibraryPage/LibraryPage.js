import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
// import { addBooks } from '../../redux/books/booksActions';
// Google Login
import * as sessionActions from '../../redux/session/sessionActions';
import logInWithGoogleOperation from '../../redux/session/sessionOperations';

import AddBook from '../../components/AddBook/AddBookContainer';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
import BookList from '../../components/BooksList/BoolksListContainer';
import css from './LibraryPage.module.css';
// import books from './books';

class LibraryPage extends Component {
  componentDidMount() {
    const { location, logInWithGoogleHandler } = this.props;
    logInWithGoogleHandler(location.search);
    localStorage.setItem('token', location.search);
    // books.forEach(book => addBooks(book));
    const { logInWithGoogle } = this.props;
    const search = queryString.parse(location.search);

    logInWithGoogle(search.token);
    logInWithGoogleHandler();
  }

  render() {
    return (
      <div>
        <main className={css.containerLibraryPage}>
          <div className={css.library}>
            <AddBook />
            <ModalCongrats isOpen />
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
  // addBooks: () => dispatch(addBooks()),
});

LibraryPage.defaultProps = {
  location: {},
};

LibraryPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  logInWithGoogle: PropTypes.func.isRequired,
  logInWithGoogleHandler: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(LibraryPage);
