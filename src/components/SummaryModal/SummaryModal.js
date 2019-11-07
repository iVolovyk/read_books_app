import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import style from './SummaryModal.module.css';

class SummaryModal extends Component {
  state = {
    rating: null,
    comment: '',
  };

  componentDidMount() {
    const {
      bookFromClickBtnEditRating,
      bookFromClickBtnEditComment,
    } = this.props;

    this.setState({
      rating: bookFromClickBtnEditRating,
      comment: bookFromClickBtnEditComment,
    });
  }

  getTextareaValue = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  // onClose
  handleSubmit = e => {
    e.preventDefault();

    const { rating, comment } = this.state;
    const { bookId, changeBookStats } = this.props;

    const booksStats = { rating, comment, bookId };

    changeBookStats(booksStats);

    this.props.onClose();
  };

  addFunc = e => {
    console.log(e);
  };

  goBack = e => {
    console.log(e);
  };

  onStarClick = nextValue => {
    this.setState({ rating: nextValue });
  };

  render() {
    const { rating, comment } = this.state;
    const { onClose } = this.props;
    return (
      <section className={style.sumModal}>
        <form onSubmit={this.handleSubmit}>
          <div className={style.stars}>
            <h2 className={style.headline}>
              Обрати ретинг книги: {!!rating && rating}
            </h2>

            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              starColor="#ef6537"
              onStarClick={this.onStarClick}
            />
          </div>
          <h2 className={style.textHeadline}>
            <span className={style.textareaName}>Резюме</span>
            <textarea
              className={style.textArea}
              onChange={this.getTextareaValue}
              name="comment"
              value={comment}
              rows="5"
            />
          </h2>
          <div className={style.buttDiv}>
            <button onClick={onClose} className={style.exitBut} type="button">
              Назад
            </button>
            <button className={style.saveBut} type="submit">
              Зберегти
            </button>
          </div>
        </form>
      </section>
    );
  }
}

SummaryModal.defaultProps = {
  bookFromClickBtnEditComment: '',
};

SummaryModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  changeBookStats: PropTypes.func.isRequired,
  bookFromClickBtnEditRating: PropTypes.number.isRequired,
  bookFromClickBtnEditComment: PropTypes.string,
  bookId: PropTypes.string.isRequired,
};

export default SummaryModal;
