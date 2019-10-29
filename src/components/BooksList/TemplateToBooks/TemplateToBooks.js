import React from 'react';
// import menuBook from '../../../assets/icons/library/menu_book-24px.svg';
import css from './TemplateToBooks.module.css';
import { ReactComponent as LibLogo } from '../../../assets/icons/library/menu_book-24px.svg';

const TemplateToBooks = list => {
  // console.log(list.list.listBooks);
  return (
    <>
      <hr />

      {/* <ul className={css.ulBooks}>
        {list.list.listBooks.map(el => (
          <li className={css.liBooks} key={el.id}>
            <div className={css.wrapHead}>
              <div className={css.nameHead}>Назва</div>
              <div className={css.authorHead}>Автор</div>
              <div className={css.yearHead}>Рік</div>
              <div className={css.pageHead}>Стор.</div>
              <div className={css.ratingHead}>Рейтинг</div>
            </div>
            <div className={css.wrapBody}>
              <div className={css.nameBody}>
                <LibLogo className={css.libLogo} />
                {el.name}
              </div>
              <div className={css.authorBody}>{el.author}</div>
              <div className={css.yearBody}>{el.year}</div>
              <div className={css.pageBody}>{el.page}</div>
              {el.rating !== undefined && (
                <>
                  <div className={css.ratingBody}>{el.rating}</div>
                  <div className={css.ratingIcon}>ICON</div>
                </>
              )}
            </div>
          </li>
        ))}
      </ul> */}
      <ul className={css.ulBooks}>
        {list.list.listBooks.map(el => (
          <li className={css.liBooks} key={el.id}>
            <div className={css.wrapName}>
              <div className={css.nameHead}>Назва</div>
              <div className={css.nameBody}>
                <LibLogo className={css.libLogo} />
                {el.name}
              </div>
            </div>
            <div className={css.wrapAuthor}>
              <div className={css.authorHead}>Автор</div>
              <div className={css.authorBody}>{el.author}</div>
            </div>
            <div className={css.wrapYear}>
              <div className={css.yearHead}>Рік</div>
              <div className={css.yearBody}>{el.year}</div>
            </div>
            <div className={css.wrapPage}>
              <div className={css.pageHead}>Стор.</div>
              <div className={css.pageBody}>{el.page}</div>
            </div>
            <div className={css.wrapRating}>
              <div className={css.ratingHead}>Рейтинг</div>
              {el.rating !== undefined && (
                <>
                  <div className={css.ratingBody}>{el.rating}</div>
                  <div className={css.ratingIcon}>ICON</div>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TemplateToBooks;
