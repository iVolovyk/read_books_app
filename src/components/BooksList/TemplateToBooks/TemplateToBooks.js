import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import css from './TemplateToBooks.module.css';
import { ReactComponent as LibLogo } from '../../../assets/icons/library/menu_book-24px.svg';
import { ReactComponent as PenLogo } from '../../../assets/icons/pen/create-24px.svg';

// const TemplateToBooks = list => {

//   return (

//   );
// };

// export default TemplateToBooks;

class TemplateToBooks extends Component {
  state = {};

  render() {
    const { list } = this.props;
    // console.log(list.listBooks);
    const tabletWidth = 768;
    const windowWidth = document.documentElement.clientWidth;
    return (
      <>
        {windowWidth >= tabletWidth && (
          <div className={css.wrapHead}>
            <div className={`${css.nameHead} ${css.title}`}>Назва книги</div>
            <div className={`${css.authorHead} ${css.title}`}>Автор</div>
            <div className={`${css.yearHead} ${css.title}`}>Рік</div>
            <div className={`${css.pageHead} ${css.title}`}>Сторінок</div>
            <div className={`${css.ratingHead} ${css.title}`}>Рейтинг</div>
          </div>
        )}
        <ul className={css.ulBooks}>
          {list.listBooks.map(el => (
            <li className={css.liBooks} key={el.id}>
              <LibLogo className={css.libLogo} />
              <div className={css.nameBody}>{el.name}</div>
              <div className={css.authorBody}>{el.author}</div>
              <div className={css.yearBody}>{el.year}</div>
              <div className={css.pageBody}>{el.page}</div>

              {/* {windowWidth >= tabletWidth && ( */}
              <>
                <div className={css.ratingBody}>
                  <StarRatingComponent
                    name={el.id}
                    className={css.starRatingComponent}
                    editing={false}
                    starCount={5}
                    value={el.rating}
                  />
                  {/* {el.rating <= 5 && `${el.rating}/5`}
                {el.rating === undefined && `0/5`} */}
                </div>
                <div className={css.wrapPenLogo}>
                  <PenLogo className={css.penLogo} />
                </div>
              </>
              {/* )} */}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TemplateToBooks;
