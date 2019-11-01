import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Google Login
import queryString from 'query-string';
import * as sessionActions from '../../redux/session/sessionActions';
import logInWithGoogleOperation from '../../redux/session/sessionOperations';

import AddBook from '../../components/AddBook/AddBookContainer';
import BookList from '../../components/BooksList/BoolksListContainer';
import css from './LibraryPage.module.css';

class LibraryPage extends Component {
  componentDidMount() {
    const { location, logInWithGoogle, logInWithGoogleHandler } = this.props;
    const search = queryString.parse(location.search);

    logInWithGoogle(search.token);
    logInWithGoogleHandler();
  }

  render() {
    return (
      <div className={css.library}>
        <h3>Header</h3>
        <h2>LibraryPage</h2>

        <AddBook />
        <h3>Book List</h3>
        <BookList />
        <h3>Summary Modal</h3>
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
