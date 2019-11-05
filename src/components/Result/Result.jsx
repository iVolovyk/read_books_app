import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ResultForm from '../ResultForm/ResultFormConteiner';
import css from './Result.module.css';

const Result = ({ sortResult }) => {
  return (
    <div className={css.result}>
      <ResultForm />
      <div className={css.resTables}>
        <h3 className={css.result_title}>статистика</h3>
        <div className={css.tableWriper}>
          <table className={css.tableresult}>
            <tbody>
              {sortResult.map(row => (
                <tr key={row._id}>
                  <td className={css.resData}>
                    {moment(row.date).format('DD.MM.YYYY')}
                  </td>
                  <td className={css.resTime}>
                    {moment(row.date).format('HH:mm:ss')}
                  </td>
                  <td className={css.colstor}>
                    {row.count}
                    <span className={css.sporin}>стор.</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Result.defaultProps = {
  sortResult: [],
};

Result.propTypes = {
  sortResult: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.string,
      time: PropTypes.string,
      peges: PropTypes.number,
    }),
  ),
};

export default Result;
