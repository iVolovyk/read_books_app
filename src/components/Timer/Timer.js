import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Timer.module.css';

export default class Timer extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    timerStart: null,
  };

  componentDidMount() {
    this.setState({
      timerStart: this.reversClock(),
    });

    // clearInterval(newTimer);
  }

  componentWillUnmount() {
    const { timerStart } = this.state;
    clearInterval(timerStart);
  }

  reversClock = () => {
    return setInterval(() => {
      const { dateFin } = this.props;
      const time = new Date(dateFin) - Date.now();
      const daysTimer = String(Math.floor(time / (1000 * 60 * 60 * 24)) + 1); // .padStart(3, '0');
      const hoursTimer = String(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ); // .padStart(2, '0');

      const minsTimer = String(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      ); // .padStart(2, '0');

      const secsTimer = String(Math.floor((time % (1000 * 60)) / 1000)); // .padStart(2, '0');

      this.setState({
        days: daysTimer,
        hours: hoursTimer,
        minutes: minsTimer,
        seconds: secsTimer,
      });
    }, 1000);
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;
    const { nameTimer } = this.props;
    return (
      <>
        <div>
          <p className={styles.titleTimer}>{nameTimer}</p>
          <div className={styles.timer}>
            <div className={styles.field}>
              <span className={styles.value} data-value="days">
                {days}
              </span>
              <span className={styles.label}>ДН</span>
            </div>

            <div className={styles.field}>
              <span className={styles.value} data-value="hours">
                {hours}
              </span>
              <span className={styles.label}>ГОД</span>
            </div>

            <div className={styles.field}>
              <span className={styles.value} data-value="mins">
                {minutes}
              </span>
              <span className={styles.label}>ХВ</span>
            </div>

            <div className={styles.field}>
              <span className={styles.value} data-value="secs">
                {seconds}
              </span>
              <span className={styles.label}>СЕК</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Timer.propTypes = {
  dateFin: PropTypes.string.isRequired,
  nameTimer: PropTypes.string.isRequired,
};
