import React from 'react';
// import PropTypes from 'prop-types';
import styles from './GoalToo.module.css';

// const GoalToo = ({ dateOne, dateToo }) => {
const GoalToo = () => {
  return (
    <section className={styles.box}>
      <div className={styles.boxTitle}>Моя мета прочитати</div>
      <ul className={styles.boxCounter}>
        <li className={styles.boxCounterItem}>
          <div className={styles.boxCounterNumber}>5</div>
          <p className={styles.boxCounterText}>Кількість книжок</p>
        </li>
        <li className={styles.boxCounterItem}>
          <div className={styles.boxCounterNumber}>14</div>
          <p className={styles.boxCounterText}>Кількість днів</p>
        </li>
      </ul>
    </section>
  );
};

// DablTimerContainer.propTypes = {

// };

export default GoalToo;
