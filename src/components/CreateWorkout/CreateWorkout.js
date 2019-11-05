import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import style from './style.module.css';
import WorkSelect from './CreateSelect/Select';
import ChosenBooks from './ChoosenBooks/ChoosenBooks';
import 'react-datetime/css/react-datetime.css';

class CreateWorkout extends Component {
  state = {
    localBooks: [],
    todayDate: '',
    chosenDate: '',
    selectedOption: null,
    selectedBook: [],
    options: [],
  };

  componentDidUpdate(prevProps) {
    const { books } = this.props;
    if (prevProps.books !== books) {
      const options = books.map(book => ({
        value: book._id,
        label: book.title,
      }));

      this.addToState(books, options);
    }
  }

  addToState = (booksArr, optArr) =>
    this.setState({ localBooks: booksArr, options: optArr });

  dateOnchangeMethod = date => {
    this.setState({
      todayDate: Datetime.moment().format('YYYY-MM-DD'),
      chosenDate: date.format('YYYY-MM-DD'),
    });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  addButt = () => {
    const { selectedOption, localBooks, options } = this.state;
    const newOptions = options.filter(
      book => book.value !== selectedOption.value,
    );

    const ChosenOne = localBooks.find(
      book => book._id === selectedOption.value,
    );

    this.setState(state => {
      return {
        selectedBook: [ChosenOne, ...state.selectedBook],
        options: newOptions,
      };
    });
  };

  hendleStartTraining = () => {
    const { selectedBook, todayDate, chosenDate } = this.state;
    const { sendTraining } = this.props;

    const totalPages = selectedBook.reduce(
      (acc, book) => acc + book.pagesCount,
      0,
    );

    const chosenBooksForTraning = selectedBook.map(book => ({
      book: book._id,
    }));

    const timeStartFormat = moment(todayDate).format('x');
    const timeEndFormat = moment(chosenDate).format('x');
    const timeForTrening = timeEndFormat - timeStartFormat;
    const DayNeeds = Number(moment(timeForTrening).format('DD'));
    const avgPages = Math.ceil(totalPages / DayNeeds);

    const training = {
      books: chosenBooksForTraning,
      timeStart: todayDate,
      timeEnd: chosenDate,
      avgReadPages: avgPages,
      readPagesCount: totalPages,
    };

    sendTraining(training);
  };

  handleDelete = e => {
    const { selectedBook } = this.state;
    const elementId = e.currentTarget.value;
    const ChosenOne = selectedBook.find(book => book._id === elementId);
    const ChosenOneOption = {
      value: ChosenOne._id,
      label: ChosenOne.title,
    };
    this.setState(prevState => {
      return {
        selectedBook: prevState.selectedBook.filter(
          book => book._id !== elementId,
        ),
        options: [...prevState.options, ChosenOneOption],
      };
    });
  };

  render() {
    const { selectedBook, chosenDate, selectedOption, options } = this.state;
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
          dateFormat="YYYY-MM-DD"
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
          onClick={this.hendleStartTraining}
          disabled={!(selectedBook.length > 0 && chosenDate)}
        >
          Почати тренування
        </button>
      </section>
    );
  }
}

CreateWorkout.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      year: PropTypes.number,
      pagesCount: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
  sendTraining: PropTypes.func.isRequired,
};

export default CreateWorkout;
