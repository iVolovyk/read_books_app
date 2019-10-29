import React from 'react';
import css from './TemplateToBooks.module.css';
// import RatingStars from '../RatingStars/RatingStars';
import { ReactComponent as LibLogo } from '../../../assets/icons/library/menu_book-24px.svg';
import { ReactComponent as PenLogo } from '../../../assets/icons/pen/create-24px.svg';

const TemplateToBooks = list => {
  // console.log(list.list.listBooks);
  return (
    <>
      <ul className={css.ulBooks}>
        {list.list.listBooks.map(el => (
          <li className={css.liBooks} key={el.id}>
            <div className={css.wrapName}>
              <LibLogo className={css.libLogo} />
              <div className={`${css.nameHead} ${css.title}`}>
                Назва книги<span>:</span>
              </div>
              <div className={css.nameBody}>{el.name}</div>
            </div>
            <div className={css.wrapAuthor}>
              <div className={`${css.authorHead} ${css.title}`}>
                Автор<span>:</span>
              </div>
              <div className={css.authorBody}>{el.author}</div>
            </div>
            <div className={css.wrapYear}>
              <div className={`${css.yearHead} ${css.title}`}>
                Рік<span>:</span>
              </div>
              <div className={css.yearBody}>{el.year}</div>
            </div>
            <div className={css.wrapPage}>
              <div className={`${css.pageHead} ${css.title}`}>
                Стор.<span>:</span>
              </div>
              <div className={css.pageBody}>{el.page}</div>
            </div>
            <div className={css.wrapRating}>
              <div className={`${css.ratingHead} ${css.title}`}>
                Рейтинг<span>:</span>
              </div>
              {/* {el.rating !== undefined && (
                <> */}
              <div className={css.ratingBody}>
                {/* <RatingStars /> */}
                {el.rating <= 5 && `${el.rating}/5`}
                {el.rating === undefined && `0/5`}
              </div>
              {/* </>
              )} */}
            </div>
            <div className={css.wrapEditIcon}>
              <PenLogo className={css.editIcon} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TemplateToBooks;
