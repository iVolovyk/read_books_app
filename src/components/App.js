import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getIsLoading } from '../redux/loader/loaderSelectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import LoginPage from '../pages/LoginPage/LoginPage';
import LibraryPage from '../pages/LibraryPage/LibraryPage';
import TrainingPage from '../pages/TrainingPage/TrainingPageConteiner';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import HeaderContainer from './Header/HeaderContainer';
// import { getUser } from '../redux/session/sessionSelectors';

class App extends Component {
  state = {};

  render() {
    const { isLoading } = this.props;
    const loaderStyles = {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.2)',
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
        <HeaderContainer name="Marta Stweart" />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/library" component={LibraryPage} />
          <Route path="/training" component={TrainingPage} />
          <Redirect to="/training" />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
