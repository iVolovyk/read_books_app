import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import LibraryPage from '../pages/LibraryPage/LibraryPageContainer';
import TrainingPage from '../pages/TrainingPage/TrainingPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

function App() {
  return (
    <>
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
