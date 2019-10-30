import React from 'react';
// import PropTypes from 'prop-types';
import styles from './DablTimerContainer.module.css';
import Timer from '../Timer/Timer';

const DablTimerContainer = ({ dateOne, dateToo }) => {
  return (
    <div className={styles.timersWraper}>
      <Timer date={dateOne} nameTimer="До закінчення року залишилось" />
      <Timer date={dateToo} nameTimer="До досягнення мети залишилось" />
    </div>
  );
};

// DablTimerContainer.propTypes = {

// };

export default DablTimerContainer;
