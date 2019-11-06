import React, { Component } from 'react';
import styles from './WorkoutInfo.module.css'; // Где твои стили исправь??!!!
import BooksBase from '../../books.json';

class ListReadBooks extends Component {
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
    // const mobileMaxWidth = 767;
    // const tabletWidth = 768;
    // const deviseWidth = document.documentElement.clientWidth;
    return (
      <>
        <form>
          {books.map(({ title, checked, id }) => (
            <label key={id} className={styles.checkbox}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name={id}
                checked={checked}
                onChange={this.handleChange}
              />
              <span className={styles.fakeCheckbox} />
              <h2 className={styles.chText}>{title}</h2>
            </label>
          ))}
        </form>
      </>
    );
  }
}

export default ListReadBooks;
