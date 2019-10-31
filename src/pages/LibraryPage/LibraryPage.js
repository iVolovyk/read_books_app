import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from '../../redux/session/sessionOperations';
import AddBook from '../../components/AddBook/AddBookContainer';
import BookList from '../../components/BooksList/BoolksListContainer';
import css from './LibraryPage.module.css';
import SummeryModal from '../../components/SummeryModal/summeryModal';

class LibraryPage extends Component {
  componentDidMount() {
    this.props.registration(this.props.location.search);
    localStorage.setItem('token', this.props.location.search);
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

const mapStateToProps = _state => ({});

const mapDispatchToProps = {
  registration,
};

export default connect(
  null,
  mapDispatchToProps,
)(LibraryPage);
