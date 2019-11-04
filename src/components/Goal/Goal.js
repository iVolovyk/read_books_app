import React from 'react';
// import moment from 'moment';
// import { connect } from 'react-redux';

// import PropTypes from 'prop-types';
import styles from './Goal.module.css';
// import {
//   getBooksForCheckList,
//   getTimeStart,
//   getTimeEnd,
// } from '../../redux/training/trainingSelectors';

// const Goal = ({ dateOne, dateToo }) => {
// const Goal = ({ books, timeStart, timeEnd }) => {
const Goal = () => {
  return (
    <section className={styles.box}>
      <div className={styles.boxTitle}>Моя мета прочитати</div>
      <ul className={styles.boxCounter}>
        <li className={styles.boxCounterItem}>
          <div className={styles.boxCounterNumber}>rttr</div>
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

// const mapStateToProps = store => ({
//   books: getBooksForCheckList(store),
//   timeStart: getTimeStart(store),
//   timeEnd: getTimeEnd(store),
// });

export default Goal;
// export default connect(mapStateToProps)(Goal);
