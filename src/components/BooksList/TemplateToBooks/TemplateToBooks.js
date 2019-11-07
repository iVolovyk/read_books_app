import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import css from './TemplateToBooks.module.css';
import { ReactComponent as LibLogo } from '../../../assets/icons/library/menu_book-24px.svg';
import { ReactComponent as PenLogo } from '../../../assets/icons/pen/create-24px.svg';
import { StatusBooks } from '../../../redux/books/booksSelectors';

class TemplateToBooks extends Component {
  state = {};

  render() {
    const { list, setSummaryModalOn, setIdInSummaryModal, isEdit } = this.props;
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
          {list.map(el => (
            <li className={css.liBooks} key={el._id}>
              <LibLogo
                className={`${css.libLogo} ${el.status ===
                  StatusBooks.READING && css.libLogoOrange} ${el.status ===
                  StatusBooks.PLANNED && css.libLogoGrey} `}
              />
              <div className={css.nameBody}>{el.title}</div>
              <div className={css.authorBody}>{el.author}</div>
              <div className={css.yearBody}>{el.year}</div>
              <div className={css.pageBody}>{el.pagesCount}</div>

              {isEdit && (
                <div>
                  <div className={css.ratingBody}>
                    <StarRatingComponent
                      name={el._id}
                      starColor="#ef6537"
                      className={css.starRatingComponent}
                      editing={false}
                      starCount={5}
                      value={el.rating}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSummaryModalOn(true);
                      setIdInSummaryModal(el._id);
                    }}
                    value={el._id}
                    className={
                      el.comment
                        ? `${css.wrapPenLogo} ${css.wrapPenLogoActive}`
                        : `${css.wrapPenLogo} `
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
TemplateToBooks.defaultProps = {
  isEdit: false,
};

TemplateToBooks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  setSummaryModalOn: PropTypes.func.isRequired,
  setIdInSummaryModal: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
};

export default TemplateToBooks;
