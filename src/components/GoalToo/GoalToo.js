import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './GoalToo.module.css';
import {
  getBooksForCheckList,
  getTimeStart,
  getTimeEnd,
} from '../../redux/training/trainingSelectors';

const GoalToo = ({ books, timeStart, timeEnd }) => {
  const timeStartFormat = moment(timeStart).format('x');
  const timeEndFormat = moment(timeEnd).format('x');
  const timeForTrening = timeEndFormat - timeStartFormat;
  const DayNeeds = moment(timeForTrening).format('DD');
  return (
    <>
      {DayNeeds > 0 && (
        <section className={styles.box}>
          <div className={styles.boxTitle}>Моя мета прочитати</div>
          <ul className={styles.boxCounter}>
            <li className={styles.boxCounterItem}>
              <div className={styles.boxCounterNumber}>{books.length}</div>
              <p className={styles.boxCounterText}>Кількість книжок</p>
            </li>
            <li className={styles.boxCounterItem}>
              <div className={styles.boxCounterNumber}>{DayNeeds}</div>
              <p className={styles.boxCounterText}>Кількість днів</p>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

GoalToo.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({ isRead: PropTypes.bool.isRequired }),
  ).isRequired,
  timeStart: PropTypes.number.isRequired,
  timeEnd: PropTypes.string.isRequired,
};

const mapStateToProps = store => ({
  books: getBooksForCheckList(store),
  timeStart: getTimeStart(store),
  timeEnd: getTimeEnd(store),
});

export default connect(mapStateToProps)(GoalToo);
