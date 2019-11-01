import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import LibraryPage from '../pages/LibraryPage/LibraryPage';
import TrainingPage from '../pages/TrainingPage/TrainingPageConteiner';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import HeaderContainer from './Header/HeaderContainer';

function App() {
  return (
    <>
      <HeaderContainer name="Martha Stewart" />
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

export default App;
