import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import style from './style.module.css';

class summeryModal extends Component {
  state = {
    rating: null,
  };

  onStarClick = nextValue => {
    this.setState({ rating: nextValue });
  };

  render() {
    const { rating } = this.state;
    return (
      <section className={style.sumModal}>
        <div className={style.stars}>
          <h2 className={style.headline}>
            Обрати ретинг книги {!!rating && rating}
          </h2>

          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick}
          />
        </div>
        <h2 className={style.textHeadline}>
          <span className={style.textareaName}>Резюме</span>{' '}
          <textarea className={style.textArea} name="comment" rows="5" />
        </h2>
        <div className={style.buttDiv}>
          <button className={style.exitBut} type="button">
            Назад
          </button>
          <button className={style.saveBut} type="button">
            Зберігти
          </button>
        </div>
      </section>
    );
  }
}

export default summeryModal;
