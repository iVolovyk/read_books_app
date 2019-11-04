import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import style from './SummaryModal.module.css';

class SummaryModal extends Component {
  state = {
    rating: null,
    textArea: '',
  };

  getTextareaValue = e => {
    this.setState({
      textArea: e.target.value,
    });
  };

  // onClose
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.textArea);
    this.props.onClose();
  };

  onStarClick = nextValue => {
    this.setState({ rating: nextValue });
  };

  render() {
    const { rating } = this.state;
    const { onClose, bookFromClickBtnEdit } = this.props;
    return (
      <section className={style.sumModal}>
        <div className={style.stars}>
          <h2 className={style.headline}>
            Обрати ретинг книги: {!!rating && rating}
          </h2>

          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={bookFromClickBtnEdit.rating}
            onStarClick={this.onStarClick}
          />
        </div>
        <h2 className={style.textHeadline}>
          <span className={style.textareaName}>Резюме</span>
          <textarea
            className={style.textArea}
            onChange={this.getTextareaValue}
            name="comment"
            rows="5"
          >
            {bookFromClickBtnEdit.comment}
          </textarea>
        </h2>
        <div className={style.buttDiv}>
          <button onClick={onClose} className={style.exitBut} type="button">
            Назад
          </button>
          <button
            onClick={this.handleSubmit}
            className={style.saveBut}
            type="button"
          >
            Зберігти
          </button>
        </div>
      </section>
    );
  }
}

SummaryModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  bookFromClickBtnEdit: PropTypes.string.isRequired,
};

export default SummaryModal;
