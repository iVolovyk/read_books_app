import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultForm from '../ResultForm/ResultForm';
import css from './Result.module.css';

class Result extends Component {
  state = {};

  // hendelSubmit = (e)=>{}

  render() {
    return (
      <div className={css.result}>
        <ResultForm />
      </div>
    );
  }
}

export default Result;
