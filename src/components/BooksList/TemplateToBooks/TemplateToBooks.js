import React from 'react';
// import menuBook from '../../../assets/icons/library/menu_book-24px.svg';
import css from './TemplateToBooks.module.css';

const TemplateToBooks = list => {
  // console.log(list.list.listBooks);
  return (
    <>
      <ul>
        <li>Назва</li>
        <li>Автор</li>
        <li>Рік</li>
        <li>Стор.</li>
        <li>Рейтинг</li>
      </ul>

      <ul>
        {list.list.listBooks.map(el => (
          <li key={el.id}>
            <div className={css.iconWrap} />
            <div>{el.name}</div>
            <div>{el.author}</div>
            <div>{el.year}</div>
            <div>{el.page}</div>
            {el.rating !== undefined && (
              <>
                <div>{el.rating}</div>
                <div>ICON</div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TemplateToBooks;
