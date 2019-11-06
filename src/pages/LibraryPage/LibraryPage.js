import React, { Component } from 'react';
import { compose } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getAllUserInfo from '../../hoc/getAllUserInfo';
// import * as booksActions from '../../redux/books/booksActions';

import AddBook from '../../components/AddBook/AddBookContainer';
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
            <BookList />
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

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  getAllUserInfo,
)(LibraryPage);
