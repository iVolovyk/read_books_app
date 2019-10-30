import React, { Component } from 'react';
import styles from './WorkoutInfo.module.css';
import BooksBase from '../../books.json';

export default class Timer extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.setState({
      books: BooksBase,
    });
  }

  handleChange = e => {
    const { name } = e.target;

    this.setState(state => ({
      books: state.books.map(book =>
        book.id === name ? { ...book, checked: !book.checked } : book,
      ),
    }));
  };

  render() {
    const { books } = this.state;
    const mobileMaxWidth = 767;
    const tabletWidth = 768;
    const deviseWidth = document.documentElement.clientWidth;
    return (
      <>
        {deviseWidth > mobileMaxWidth && (
          <div className={styles.notMobileHeadline}>
            <p className={styles.bookName}>Назва Книги</p>
            <p className={styles.authorName}>Автор</p>
            <p className={styles.year}>Рік</p>
            <p className={styles.pageNumber}>Сторінок</p>
          </div>
        )}

        <div className={styles.formWrap}>
          <form>
            <ul className={styles.ulBooks}>
              {books.map(({ title, author, year, pageNumber, checked, id }) => (
                <li key={id}>
                  <label className={styles.bookInfo}>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      name={id}
                      checked={checked}
                      onChange={this.handleChange}
                    />
                    <span className={styles.fakeCheckbox} />
                    <span className={styles.bookHeadline}>{title}</span>

                    <p className={styles.authorsNameSername}>
                      {deviseWidth < tabletWidth && (
                        <span className={styles.mobileHeadline}>Автор:</span>
                      )}
                      {author}
                    </p>

                    <p className={styles.yearOfPublication}>
                      {deviseWidth < tabletWidth && (
                        <span className={styles.mobileHeadline}>Рік:</span>
                      )}
                      {year}
                    </p>

                    <p className={styles.numberOfBookPages}>
                      {deviseWidth < tabletWidth && (
                        <span className={styles.mobileHeadline}>Сторінок:</span>
                      )}
                      {pageNumber}
                    </p>
                  </label>
                </li>
              ))}
            </ul>
          </form>
        </div>
      </>
    );
  }
}
