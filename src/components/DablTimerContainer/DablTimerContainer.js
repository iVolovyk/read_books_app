import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './DablTimerContainer.module.css';
import Timer from '../Timer/Timer';
import { getTimeEnd } from '../../redux/training/trainingSelectors';

const DablTimerContainer = ({ timeEnd }) => {
  const endDataTime = moment(timeEnd).format('ll');

  return (
    <div className={styles.timersWraper}>
      <Timer
        dateFin="Jan 1, 2020"
        nameTimer="До закінчення року залишилось"
        className={styles.timer}
      />
      <Timer
        dateFin={endDataTime}
        nameTimer="До досягнення мети залишилось"
        className={styles.timer}
      />
    </div>
  );
};

DablTimerContainer.propTypes = {
  timeEnd: PropTypes.string.isRequired,
};

const mapStateToProps = store => ({
  timeEnd: getTimeEnd(store),
});

export default connect(mapStateToProps)(DablTimerContainer);
