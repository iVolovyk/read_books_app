import React, { Component } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import style from './style.module.css';
import WorkSelect from './CreateSelect/Select';
import ChosenBooks from './ChoosenBooks/ChoosenBooks';
import 'react-datetime/css/react-datetime.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

class CreateWorkout extends Component {
  state = {
    localBooks: [],
    todayDate: '',
    chosenDate: '',
    selectedOption: null,
    selectedBook: [],
    options: [],
  };

  componentDidMount() {
    const { books } = this.props;
    const options = books.map(book => ({
      value: book._id,
      label: book.title,
    }));

    this.addToState(books, options);
  }

  componentDidUpdate(prevProps) {
    const { books } = this.props;
    if (prevProps !== this.props) {
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

    if (!selectedOption) {
      toast.error('Будь ласка оберіть книгу', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar',
      });
      return;
    }
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
        selectedOption: null,
      };
    });
  };

  hendleStartTraining = () => {
    const { selectedBook, todayDate, chosenDate } = this.state;
    const { sendTraining } = this.props;
    if (selectedBook.length < 1) {
      toast.error(
        'Додайте хоча б одну книгу!  Кількість книг повинна бути більше за 0!',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar',
        },
      );
      return;
    }
    if (chosenDate === '') {
      toast.error('Будь ласка, оберіть дату!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar',
      });
      return;
    }

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
    const { selectedBook, selectedOption, options } = this.state;
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
          defaultValue="Оберіть Дату"
          locale="uk"
          dateFormat="DD.MM.YYYY"
          timeFormat={false}
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
          >
            Додати
          </button>
        </div>
        <ChosenBooks books={selectedBook} onClick={this.handleDelete} />
        <button
          className={style.startButt}
          type="button"
          onClick={this.hendleStartTraining}
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
