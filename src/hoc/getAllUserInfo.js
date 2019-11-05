/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// селектор буля авторизирован ли пользователь....
import { isAutorise } from '../redux/session/sessionSelectors';

// операция получение массива книжак пользователя
import { asyncGetBook } from '../redux/training/trainingOperations';

// создем функцию ХОК которая принимает компонент и прередает дальше
// но при этом делает запросы на сервер для получения всей информации юзера..
const getAllUserInfo = BaseComponent => {
  // создаем класс нашего хока
  class GetAllUserInfo extends Component {
    state = {};

    // При монтировании компонента делаем запросы на сервер..
    componentDidMount() {
      const { isAutorise, asyncGetBook } = this.props;
      // только если юзер авторизирован....
      if (isAutorise) {
        asyncGetBook();
      }
    }

    // рендорим принятый компонент передаем ему пропы..
    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  GetAllUserInfo.propTypes = {
    isAutorise: PropTypes.bool.isRequired,
    asyncGetBook: PropTypes.func.isRequired,
  };

  const mapStateToProps = state => ({
    isAutorise: true, // isAutorise(state),
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
