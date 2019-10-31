import React, { Component } from 'react';
import Datetime from 'react-datetime';
import style from './style.module.css';
import WorkSelect from './CreateSelect/Select';
import ChosenBooks from './ChoosenBooks/ChoosenBooks';
import 'react-datetime/css/react-datetime.css';

class CreateWorkout extends Component {
  state = {
    books: [],
    todayDate: null,
    ChosenDate: null,
    totalPages: null,
    totalBooks: null,
  };

  componentDidUpdate() {
    console.log(this.state);
    console.log(this.state);
  }

  dateOnchangeMethod = date => {
    this.setState({
      todayDate: Datetime.moment().format('MMM Do YY'),
      ChosenDate: date.format('MMM Do YY'),
    });
  };

  render() {
    const { books } = this.state;
    const yesterday = Datetime.moment().subtract(1, 'day');
    const valid = current => {
      return current.isAfter(yesterday);
    };
    return (
      <section className={style.Workout}>
        <h2 className={style.headline}>Моє тренування</h2>
        <Datetime
          isValidDate={valid}
          className={style.dataPeacker}
          onChange={this.dateOnchangeMethod}
          defaultValue="Я справлюсь за"
          locale="uk"
          dateFormat="DD.MM.YYYY"
        />
        <div className={style.bookChooser}>
          <WorkSelect className={style.select} />
          <button className={style.addButt} type="button">
            Додати
          </button>
        </div>
        <ChosenBooks books={books} />
        <button className={style.startButt} type="button">
          Почати тренування
        </button>
      </section>
    );
  }
}

export default CreateWorkout;
