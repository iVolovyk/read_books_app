import React, { Component } from 'react';
import Datetime from 'react-datetime';
import style from './style.module.css';
import WorkSelect from './CreateSelect/Select';
import ChosenBooks from './ChoosenBooks/ChoosenBooks';
import 'react-datetime/css/react-datetime.css';
import bOOks from '../../books.json';

class CreateWorkout extends Component {
  state = {
    books: [],
    todayDate: null,
    ChosenDate: null,
    totalPages: null,
    totalBooks: null,
    selectedOption: null,
    selectedBook: [],
    options: [],
  };

  componentDidMount() {
    const { selectedBook, books } = this.state;
    // console.log(this.state.selectedBook.length);
    // console.log(this.state.selectedOption);
    // console.log(this.state.todayDate);
    // console.log(this.state.ChosenDate);
    // selectedBook.splice(ChosenBook, 1);

    const options = bOOks.map(book => ({
      value: book._id,
      label: book.title,
    }));

    this.setState({
      books: bOOks,
      options,
    });
  }

  dateOnchangeMethod = date => {
    this.setState({
      todayDate: Datetime.moment().format('MMM Do YY'),
      ChosenDate: date.format('MMM Do YY'),
    });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  addButt = () => {
    const { selectedOption, books, options } = this.state;
    const newOptions = options.filter(
      book => book.value !== selectedOption.value,
    );

    const ChosenOne = books.find(book => book._id === selectedOption.value);

    this.setState(state => {
      return {
        selectedBook: [ChosenOne, ...state.selectedBook],
        options: newOptions,
      };
    });
  };

  hendleClick = () => {
    const { selectedBook } = this.state;
    this.setState({
      totalPages: selectedBook.reduce((acc, book) => acc + book.pagesCount, 0),
      totalBooks: selectedBook.length,
    });
  };

  handleDelete = e => {
    const { selectedBook } = this.state;
    const elementId = e.currentTarget.value;
    const ChosenOne = selectedBook.find(book => book._id === elementId);
    console.log(ChosenOne);

    this.setState(prevState => {
      return {
        selectedBook: prevState.selectedBook.filter(
          book => book._id !== elementId,
        ),
        // options: [prevState.options, ...ChosenOne],
      };
    });
  };

  // componentDidUpdate() {
  //   // console.log(this.state.options);
  // }

  render() {
    const { selectedBook, ChosenDate, selectedOption, options } = this.state;
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
          <WorkSelect
            selectedOption={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          <button
            onClick={this.addButt}
            className={style.addButt}
            type="button"
            disabled={!selectedOption}
          >
            Додати
          </button>
        </div>
        <ChosenBooks books={selectedBook} onClick={this.handleDelete} />
        <button
          className={style.startButt}
          type="button"
          onClick={this.hendleClick}
          disabled={!(selectedBook.length > 0 && ChosenDate)}
        >
          Почати тренування
        </button>
      </section>
    );
  }
}

export default CreateWorkout;
