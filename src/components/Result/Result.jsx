<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ResultForm from '../ResultForm/ResultFormConteiner';
import css from './Result.module.css';

const Result = ({ result }) => {
  const sortResult = [...result].sort();
=======
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import ResultForm from "../ResultForm/ResultFormConteiner";
import css from "./Result.module.css";

function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

const Result = ({ result }) => {
  const sortResult = [...result].sort((a, b) =>
    a.date > b.date ? 1 : b.date > a.date ? -1 : 0
  );
>>>>>>> dev

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
<<<<<<< HEAD
                    {moment(row.date).format('DD.MM.YYYY')}
                  </td>
                  <td className={css.resTime}>
                    {moment(row.date).format('HH:mm:ss')}
=======
                    {moment(row.date).format("DD.MM.YYYY")}
                  </td>
                  <td className={css.resTime}>
                    {moment(row.date).format("HH:mm:ss")}
>>>>>>> dev
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
<<<<<<< HEAD
  result: [],
=======
  result: []
>>>>>>> dev
};

Result.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.string,
      time: PropTypes.string,
<<<<<<< HEAD
      peges: PropTypes.number,
    }),
  ),
=======
      peges: PropTypes.number
    })
  )
>>>>>>> dev
};

export default Result;
