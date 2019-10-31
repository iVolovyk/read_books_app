import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';

import { registration } from '../../redux/session/sessionOperations';
import AddBook from '../../components/AddBook/AddBookContainer';

class LibraryPage extends Component {
  componentDidMount() {
    const { location } = this.props;
    const search = queryString.parse(location.search);
    console.log(search.token);

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

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  registration,
};

export default connect(
  null,
  mapDispatchToProps,
)(LibraryPage);
