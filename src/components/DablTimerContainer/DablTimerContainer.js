import React from 'react';

import styles from './DablTimerContainer.module.css';
import Timer from '../Timer/Timer';

const DablTimerContainer = ({ dateOne, dateToo }) => {
  return (
    <div className={styles.timersWraper}>
      <Timer date="Jan 1, 2020" nameTimer="До закінчення року залишилось" />
      <Timer date="Nov 30, 2019" nameTimer="До досягнення мети залишилось" />
    </div>
  );
};

export default DablTimerContainer;
