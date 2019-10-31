import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './TrainingPage.module.css';
import CreateWorkout from '../../components/CreateWorkout/CreateWorkout';
import Goal from '../../components/Goal/Goal';
import Timer from '../../components/DablTimerContainer/DablTimerContainer';
import WorkoutInfo from '../../components/WorkoutInfo/WorkoutInfo';

class TrainingPage extends Component {
  state = {};

  render() {
    const desctopWidth = 1228;
    const deviseWidth = document.documentElement.clientWidth;

    const { goal, openmodal } = this.props;

    return (
      <main className="container">
        <div className={css.trainingPageWrapper}>
          {goal ? (
            <>
              {deviseWidth < desctopWidth ? (
                <>
                  <section className={css.treningSection}>
                    <Timer />
                  </section>
                  <section className={css.treningSection}>
                    <Goal />
                  </section>
                  <section className={css.treningSection}>
                    <WorkoutInfo />
                  </section>
                  <section className={css.treningSection}>
                    <div style={{ backgroundColor: '#9dd' }}>Schedule</div>
                  </section>
                  <section className={css.treningSection}>
                    <div style={{ backgroundColor: '#512' }}>Result</div>
                  </section>
                </>
              ) : (
                <>
                  <div className={css.leftArea}>
                    <section className={css.treningSection}>
                      <Timer />
                    </section>
                    <section className={css.treningSection}>
                      <WorkoutInfo />
                    </section>
                    <section className={css.treningSection}>
                      <div style={{ backgroundColor: '#9dd' }}>Schedule</div>
                    </section>
                  </div>
                  <div className={css.rightArea}>
                    <section className={css.treningSection}>
                      <Goal />
                    </section>
                    <section className={css.treningSection}>
                      <div style={{ backgroundColor: '#512' }}>Result</div>
                    </section>{' '}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {deviseWidth < desctopWidth ? (
                <>
                  <section className={css.treningSection}>
                    <div style={{ backgroundColor: '#98f' }}>Goal</div>
                  </section>
                  <section className={css.treningSection}>
                    <CreateWorkout />
                  </section>
                  <section className={css.treningSection}>
                    <div style={{ backgroundColor: '#9dd' }}>Schedule</div>
                  </section>
                </>
              ) : (
                <>
                  <div className={css.leftArea}>
                    <section className={css.treningSection}>
                      <CreateWorkout />
                    </section>
                    <section className={css.treningSection}>
                      <div style={{ backgroundColor: '#9dd' }}>Schedule</div>
                    </section>
                  </div>
                  <div className={css.rightArea}>
                    <section className={css.treningSection}>
                      <div style={{ backgroundColor: '#98f' }}>Goal</div>
                    </section>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        {openmodal && <p>Модал Конгратс</p>}
      </main>
    );
  }
}

TrainingPage.propTypes = {
  goal: PropTypes.bool.isRequired,
  openmodal: PropTypes.bool.isRequired,
};

export default TrainingPage;
