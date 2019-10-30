import React, { Component } from 'react';
import CreateWorkout from '../../components/CreateWorkout/CreateWorkout';

class TrainingPage extends Component {
  state = {};

  render() {
    return (
      <>
        <h2>TrainingPage</h2>
        <CreateWorkout />
      </>
    );
  }
}

export default TrainingPage;
