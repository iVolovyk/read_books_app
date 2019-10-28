import React from 'react';
// import menuBook from '../../../assets/icons/library/menu_book-24px.svg';
import css from './TemplateToBooks.module.css';

const TemplateToBooks = list => {
  // console.log(list.list.listBooks);
  return (
    <>
      <table className={css.wrapTable}>
        <thead>
          <tr className={css.tableHead}>
            <th className={css.tabName}>Назва</th>
            <th className={css.tabAuthor}>Автор</th>
            <th className={css.tabYear}>Рік</th>
            <th className={css.tabPage}>Стор.</th>
          </tr>
        </thead>
        <tbody>
          {list.list.listBooks.map(el => (
            <tr className={css.tableBody} key={el.id}>
              <td className={css.tabName}>
                <div className={css.iconWrap} />
                {el.name}
              </td>
              <td className={css.tabAuthor}>{el.author}</td>
              <td className={css.tabYear}>{el.year}</td>
              <td className={css.tabPage}>{el.page}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TemplateToBooks;
