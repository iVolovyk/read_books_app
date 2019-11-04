import React from 'react';
import PropTypes from 'prop-types';
import ResultForm from '../ResultForm/ResultFormConteiner';
import css from './Result.module.css';

const Result = ({ result }) => {
  return (
    <div className={css.result}>
      <ResultForm />
      <div className={css.resTables}>
        <h3 className={css.result_title}>статистика</h3>
        <div className={css.tableWriper}>
          <table className={css.tableresult}>
            <tbody>
              {result.map(row => (
                <tr key={row.id}>
                  <td className={css.resData}>{row.data}</td>
                  <td className={css.resTime}>{row.time}</td>
                  <td className={css.colstor}>
                    {row.peges}
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
  result: [],
};

Result.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.string,
      time: PropTypes.string,
      peges: PropTypes.number,
    }),
  ),
};

export default Result;
