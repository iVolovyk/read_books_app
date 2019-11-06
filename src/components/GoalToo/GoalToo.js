import React from 'react';
import PropTypes from 'prop-types';
import styles from './GoalToo.module.css';

const GoalToo = ({ books, day }) => {
  return (
    <>
      <section className={styles.box}>
        <div className={styles.boxTitle}>Моя мета прочитати</div>
        <ul className={styles.boxCounter}>
          <li className={styles.boxCounterItem}>
            <div className={styles.boxCounterNumber}>{books}</div>
            <p className={styles.boxCounterText}>Кількість книжок</p>
          </li>
          <li className={styles.boxCounterItem}>
            <div className={styles.boxCounterNumber}>{day}</div>
            <p className={styles.boxCounterText}>Кількість днів</p>
          </li>
        </ul>
      </section>
    </>
  );
};

GoalToo.propTypes = {
  books: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

export default GoalToo;
