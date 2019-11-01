/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAutorise } from '../redux/session/sessionSelectors';
import { asyncGetBook } from '../redux/results/resultsOperations';

const getAllUserInfo = BaseComponent => {
  class GetAllUserInfo extends Component {
    state = {};
    componentDidMount() {
      console.log('getAllUserInfo HOC');

      const { isAutorise, asyncGetBook } = this.props;

      if (isAutorise) {
        asyncGetBook();
      }
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    isAutorise: true, //isAutorise(state),
  });

  const mapDispatchToProps = dispatch => ({
    asyncGetBook: () => dispatch(asyncGetBook()),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(GetAllUserInfo);
};

export default getAllUserInfo;
