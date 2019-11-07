import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import { toast } from 'react-toastify';
import css from './ResultForm.module.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

class ResultForm extends Component {
  state = {
    datetime: {},
    pagesRead: 0,
  };

  componentDidMount() {
    this.setState({ datetime: Datetime.moment() });
  }

  handleChange = e => {
    this.setState({
      pagesRead: Number(e.target.value),
    });
  };

  hendelPagestData = mom => {
    this.setState({
      datetime: mom,
    });
  };

  hendelSubmit = e => {
    e.preventDefault();
    const { datetime, pagesRead } = this.state;
    if (pagesRead <= 0) {
      toast.error(
        'Введіть кількість сторінок!  Кількість сторінок повинно бути більше за 0!',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar',
        },
      );
      return;
    }

    const resObject = {
      date: datetime.format(),
      count: pagesRead,
    };

    this.props.onSetResult(resObject);

    this.setState({ datetime: Datetime.moment(), pagesRead: 0 });
  };

  getValidDates = currentDate => {
    const { timeStart } = this.props;

    return (
      currentDate.isBefore(moment()) &&
      currentDate.isAfter(moment(timeStart).subtract(1, 'day'))
    );
  };

  render() {
    const { datetime, pagesRead } = this.state;
    return (
      <form action="#" onSubmit={this.hendelSubmit} className={css.formResult}>
        <h3 className={css.result_title}>Результати</h3>
        <label htmlFor="datetime" className={css.labelStyles}>
          Дата
          <Datetime
            value={datetime}
            locale="uk"
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            onChange={this.hendelPagestData}
            isValidDate={this.getValidDates}
            closeOnSelect
          />
        </label>
        <label htmlFor="numberOfPagesRead" className={css.labelStyles}>
          Кількість сторінок
          <input
            id="numberOfPagesRead"
            type="number"
            placeholder="..."
            value={pagesRead === 0 ? '' : pagesRead}
            className="styledInput"
            onChange={this.handleChange}
            name="pagesRead"
          />
        </label>
        <button type="submit" className={css.styledButton}>
          Додати результат
        </button>
      </form>
    );
  }
}
ResultForm.defaultProps = {
  timeStart: 0,
};

ResultForm.propTypes = {
  onSetResult: PropTypes.func.isRequired,
  timeStart: PropTypes.number,
};

export default ResultForm;
