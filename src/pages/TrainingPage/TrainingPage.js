import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './TrainingPage.module.css';
import CreateWorkout from '../../components/CreateWorkout/CreateWorkContainer';
import Goal from '../../components/Goal/GoalContainer';
import GoalToo from '../../components/GoalToo/GoalTooContainer';
import Timer from '../../components/DablTimerContainer/DablTimerContainer';
import WorkoutInfo from '../../components/WorkoutInfo/WorkoutinfoContainer';
import Result from '../../components/Result/ResultConteiner';
import Schedule from '../../components/Schedule/ScheduleConteiner';
import ModalCongrats from '../../components/ModalCongrats/ModalCongratsContainer';
import ModalNeedFaster from '../../components/ModalNeedFaster/ModalNeedFasterContainer';

class TrainingPage extends Component {
  state = {};

  render() {
    const desctopWidth = 1280;
    const deviseWidth = document.documentElement.clientWidth;

    const { goal } = this.props;

    return (
      <main className={css.mainblok}>
        <div className="container">
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
                      <Result />
                    </section>
                    <section className={css.treningSection}>
                      <Schedule />
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
                        <Schedule />
                      </section>
                    </div>
                    <div className={css.rightArea}>
                      <section className={css.treningSection}>
                        <Goal />
                      </section>
                      <section className={css.treningSection}>
                        <Result />
                      </section>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                {deviseWidth < desctopWidth ? (
                  <>
                    <section className={css.treningSection}>
                      <GoalToo />
                    </section>
                    <section className={css.treningSection}>
                      <CreateWorkout />
                    </section>
                    {/* <section className={css.treningSection}>
                      <Schedule />
                    </section> */}
                  </>
                ) : (
                  <>
                    <div className={css.leftArea}>
                      <section className={css.treningSection}>
                        <div style={{ backgroundColor: '#98f' }}>
                          <CreateWorkout />
                        </div>
                      </section>
                      {/* <section className={css.treningSection}>
                        <Schedule />
                      </section> */}
                    </div>
                    <div className={css.rightArea}>
                      <section className={css.treningSection}>
                        <GoalToo />
                      </section>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <ModalCongrats />
          <ModalNeedFaster />
        </div>
      </main>
    );
  }
}

TrainingPage.propTypes = {
  goal: PropTypes.bool.isRequired,
};

export default TrainingPage;
