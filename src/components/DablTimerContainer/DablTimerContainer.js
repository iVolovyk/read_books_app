import React from 'react';
// import PropTypes from 'prop-types';
import styles from './DablTimerContainer.module.css';
import Timer from '../Timer/Timer';

// const DablTimerContainer = ({ dateOne, dateToo }) => {
const DablTimerContainer = () => {
  return (
    <div className={styles.timersWraper}>
      <Timer
        date="Jan 1, 2020"
        nameTimer="До закінчення року залишилось"
        className={styles.timer}
      />
      <Timer
        date="Nov 30, 2019"
        nameTimer="До досягнення мети залишилось"
        className={styles.timer}
      />
    </div>
  );
};

// DablTimerContainer.propTypes = {
//   dateOne: PropTypes.string.isRequired,
//   dateToo: PropTypes.string.isRequired,
// };

export default DablTimerContainer;
