import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import * as loaderSelectors from '../redux/loader/loaderSelectors';
import * as sessionSelectors from '../redux/session/sessionSelectors';
import * as sessionOperations from '../redux/session/sessionOperations';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import LoginPage from '../pages/LoginPage/LoginPage';
import LibraryPage from '../pages/LibraryPage/LibraryPage';
import TrainingPage from '../pages/TrainingPage/TrainingPageConteiner';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import HeaderContainer from './Header/HeaderContainer';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

class App extends Component {
  state = {};

  componentDidMount() {
    const { token, getUserOperation } = this.props;
    if (!token) {
      return;
    }
    getUserOperation();
  }

  render() {
    const { isLoading } = this.props;
    const loaderStyles = {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: '#fff',
      zIndex: '10',
    };
    return (
      <>
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#F39A3E"
            height={80}
            width={80}
            style={loaderStyles}
            timeout={0}
          />
        )}
        <HeaderContainer />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <ProtectedRoute
            path="/library"
            component={LibraryPage}
            redirectTo="/login"
          />
          <ProtectedRoute
            path="/training"
            component={TrainingPage}
            redirectTo="/login"
          />
          <Redirect to="/training" />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: loaderSelectors.getIsLoading(state),
  token: sessionSelectors.getToken(state),
});

const mapDispatchToProps = dispatch => ({
  getUserOperation: () => dispatch(sessionOperations.getUserOperation()),
});

App.defaultProps = {
  token: '',
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  getUserOperation: PropTypes.func.isRequired,
  token: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
