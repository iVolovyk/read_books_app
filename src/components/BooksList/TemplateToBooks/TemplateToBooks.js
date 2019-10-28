import React from 'react';
import menuBook from '../../../assets/icons/library/menu_book-24px.svg';

const TemplateToBooks = list => {
  console.log(list.list.listBooks);
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th />
            <th>Назва</th>
            <th>Автор</th>
            <th>Рік</th>
            <th>Стор.</th>
          </tr>
        </thead>
        <tbody>
          {list.list.listBooks.map(el => (
            <tr key={el.id}>
              <td>
                <img src={menuBook} alt="menu_book" />
              </td>
              <td>{el.name}</td>
              <td>{el.author}</td>
              <td>{el.year}</td>
              <td>{el.st}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TemplateToBooks;
