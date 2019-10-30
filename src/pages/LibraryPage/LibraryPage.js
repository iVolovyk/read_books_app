import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from '../../redux/session/sessionOperations';

class LibraryPage extends Component {
  state = {};

  componentDidMount() {
    this.props.registration(this.props.location.search);
    localStorage.setItem('token', this.props.location.search);
  }

  render() {
    return <h2>LibraryPage</h2>;
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
