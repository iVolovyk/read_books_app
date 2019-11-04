import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as booksActions from '../../redux/books/booksActions';

import AddBook from '../../components/AddBook/AddBookContainer';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
import BookList from '../../components/BooksList/BoolksListContainer';
import css from './LibraryPage.module.css';
// import books from './books';

class LibraryPage extends Component {
  componentDidMount() {
    // const { addBooks } = this.props;
    // books.forEach(book => addBooks(book));
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

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => ({
  // addBooks: () => dispatch(booksActions.addBooks()),
});

LibraryPage.propTypes = {
  // isAuthenticated: PropTypes.bool.isRequired,
  // addBooks: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(LibraryPage);
