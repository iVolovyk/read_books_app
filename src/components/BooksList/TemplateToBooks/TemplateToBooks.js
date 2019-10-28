import React from 'react';

const TemplateToBooks = list => {
  console.log(list.list.listBooks);
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Назва</th>
            <th>Автор</th>
            <th>Рік</th>
            <th>Стор.</th>
          </tr>
        </thead>
        <tbody>
          {list.list.listBooks.map(el => (
            <tr key={el.id}>
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
