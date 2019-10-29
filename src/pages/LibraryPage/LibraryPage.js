/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './LibraryPage.module.css';

class LibraryPage extends Component {
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
    this.props.addBooks(this.state);
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
          <label>
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
            <label>
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
            <label>
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
            <label>
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

export default LibraryPage;

LibraryPage.propTypes = {
  addBooks: PropTypes.func.isRequired,
};
