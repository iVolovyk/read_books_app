/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import css from './TemplateToBooks.module.css';
import { ReactComponent as LibLogo } from '../../../assets/icons/library/menu_book-24px.svg';
import { ReactComponent as PenLogo } from '../../../assets/icons/pen/create-24px.svg';

class TemplateToBooks extends Component {
  state = {};

  render() {
    const { list, setSummaryModalOn, isEdit } = this.props;
    // console.log(list.listBooks);
    return (
      <>
        <div className={css.wrapHead}>
          <div className={`${css.nameHead} ${css.title}`}>Назва книги</div>
          <div className={`${css.authorHead} ${css.title}`}>Автор</div>
          <div className={`${css.yearHead} ${css.title}`}>Рік</div>
          <div className={`${css.pageHead} ${css.title}`}>Сторінок</div>
          {isEdit && (
            <div className={`${css.ratingHead} ${css.title}`}>Рейтинг</div>
          )}
        </div>

        <ul className={css.ulBooks}>
          {list.listBooks.map(el => (
            <li className={css.liBooks} key={el.id}>
              <LibLogo className={css.libLogo} />
              <div className={css.nameBody}>{el.name}</div>
              <div className={css.authorBody}>{el.author}</div>
              <div className={css.yearBody}>{el.year}</div>
              <div className={css.pageBody}>{el.page}</div>

              {isEdit && (
                <div>
                  <div className={css.ratingBody}>
                    <StarRatingComponent
                      name={el.id}
                      className={css.starRatingComponent}
                      editing={false}
                      starCount={5}
                      value={el.rating}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setSummaryModalOn(true)}
                    className={
                      el.comment === undefined
                        ? `${css.wrapPenLogo}`
                        : `${css.wrapPenLogo} ${css.wrapPenLogoActive}`
                    }
                  >
                    <PenLogo className={css.penLogo} />
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TemplateToBooks;
