import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './AddBook.module.css';

class AddBook extends Component {
  state = { title: '', author: '', year: '', pageNumber: '' };

  resetState = () => {
    this.setState({
      title: '',
      author: '',
      year: '',
      pageNumber: '',
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { title, author, year, pageNumber } = this.state;
    const newBook = {
      title,
      author,
      year: Number(year),
      pageNumber: Number(pageNumber),
      status: 'planned',
      checked: false,
    };
    this.props.addBooks(newBook);
    this.resetState();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, author, year, pageNumber } = this.state;
    return (
      <div className={css.container}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor="Назва книги">
            Назва книги
            <input
              placeholder="..."
              className={css.title}
              onChange={this.handleChange}
              type="text"
              name="title"
              value={title}
              required
            />
          </label>
          <div className={css.tablet}>
            <label htmlFor="Автор книги">
              Автор книги
              <input
                placeholder="..."
                className={css.author}
                onChange={this.handleChange}
                type="text"
                name="author"
                value={author}
              />
            </label>
            <label htmlFor="Рік випуску">
              Рік випуску
              <input
                placeholder="..."
                className={css.year}
                onChange={this.handleChange}
                type="number"
                name="year"
                value={year}
              />
            </label>
            <label htmlFor="Кількість сторінок">
              Кількість сторінок
              <input
                placeholder="..."
                className={css.pageNumber}
                onChange={this.handleChange}
                type="number"
                name="pageNumber"
                value={pageNumber}
                required
              />
            </label>
          </div>
          <button type="submit" className={css.button}>
            Додати
          </button>
        </form>
      </div>
    );
  }
}

export default AddBook;

AddBook.propTypes = {
  addBooks: PropTypes.func.isRequired,
};
