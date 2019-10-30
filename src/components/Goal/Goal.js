import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Goal.module.css';

const Goal = ({ dateOne, dateToo }) => {
  return (
    <section className="box1">
      <div className={styles.boxTitle}>Моя мета прочитати</div>
      <ul className={styles.boxCounter}>
        <li className={styles.boxCounterItem}>
          <div className={styles.boxCounterNumber}>3</div>
          <p className={styles.boxCounterText}>Кількість книжок</p>
        </li>
        <li className={styles.boxCounterItem}>
          <div className={styles.boxCounterNumber}>14</div>
          <p className={styles.boxCounterText}>Кількість днів</p>
        </li>
        <li className={styles.boxCounterItem}>
          <div
            className={`${styles.boxCounterNumber} ${styles.boxCounterNumberOrange}`}
          >
            1
          </div>
          <p className={styles.boxCounterText}>Залишилось книжок</p>
        </li>
      </ul>
    </section>
  );
};

// DablTimerContainer.propTypes = {

// };

export default Goal;
