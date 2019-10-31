import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultForm from '../ResultForm/ResultFormConteiner';
import css from './Result.module.css';

const Result = ({ result }) => {
  console.log('====================================');
  console.log(result);
  console.log('====================================');
  return (
    <div className={css.result}>
      <ResultForm />
      <div className={css.resTables}>
        <h3 className={css.result_title}>статистика</h3>
        <div className={css.tableWriper}>
          <table className={css.tableresult}>
            {result.map(row => (
              <tr>
                <td className={css.resData}>{row.data}</td>
                <td className={css.resTime}>{row.time}</td>
                <td className={css.colstor}>
                  {row.peges}
                  <span className={css.sporin}>стор.</span>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Result;
