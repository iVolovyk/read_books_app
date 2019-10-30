import React, { Component } from 'react';

import { connect } from 'react-redux';
import BooksList from '../../components/BooksList/BooksList';

import { registration } from '../../redux/session/sessionOperations';

class LibraryPage extends Component {
  state = {};

  componentDidMount() {
    this.props.registration(this.props.location.search);
    localStorage.setItem('token', this.props.location.search);
  }

  render() {
    return (
      <>
        <BooksList />
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  registration,
};

export default connect(
  null,
  mapDispatchToProps,
)(LibraryPage);
