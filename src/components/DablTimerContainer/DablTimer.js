import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './DablTimer.module.css';
import Timer from '../Timer/Timer';

const DablTimer = ({ timeEnd }) => {
  const endDataTime = moment(timeEnd).format('ll');

  return (
    <>
      {endDataTime !== null && (
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
      )}
    </>
  );
};

DablTimer.defaultProps = {
  timeEnd: '',
};

DablTimer.propTypes = {
  timeEnd: PropTypes.string,
};

export default DablTimer;
