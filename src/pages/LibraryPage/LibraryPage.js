import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from '../../redux/session/sessionOperations';
import AddBook from '../../components/AddBook/AddBookContainer';

class LibraryPage extends Component {
  componentDidMount() {
    this.props.registration(this.props.location.search);
    localStorage.setItem('token', this.props.location.search);
  }

  render() {
    return (
      <div>
        <AddBook />
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
