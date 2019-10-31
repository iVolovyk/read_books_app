import React from 'react';
import TemplateToBooks from '../TemplateToBooks/TemplateToBooks';
import css from '../BooksList.module.css';

const ReadBooks = list => (
  <>
    <h2 className={css.titleTable}>Прочитано</h2>
    <TemplateToBooks list={list} />
  </>
);

export default ReadBooks;
