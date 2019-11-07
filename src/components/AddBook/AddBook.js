import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './AddBook.module.css';

class AddBook extends Component {
  state = { title: '', author: '', year: '', pagesCount: '' };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addBook(this.state);
    this.setState({
      title: '',
      author: '',
      year: '',
      pagesCount: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, author, year, pagesCount } = this.state;
    return (
      <>
        <form className={css.formAddBook} onSubmit={this.handleSubmit}>
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
              pattern="([A-Za-zА-Яа-яЁё0-9-іІїЇєЄ ]{3,})"
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
                min="1"
                max="2019"
                name="year"
                value={year}
              />
            </label>
            <label htmlFor="Кількість сторінок">
              Кількість сторінок
              <input
                placeholder="..."
                className={css.pagesCount}
                onChange={this.handleChange}
                type="number"
                min="1"
                name="pagesCount"
                value={pagesCount}
                required
              />
            </label>
          </div>
          <button type="submit" className={css.buttonAddBook}>
            Додати
          </button>
        </form>
      </>
    );
  }
}

export default AddBook;

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};
