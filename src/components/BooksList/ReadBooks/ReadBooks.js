import React from 'react';
import TemplateToBooks from '../TemplateToBooks/TemplateToBooksContainer';
import css from '../BooksList.module.css';

const ReadBooks = list => (
  <>
    <h2 className={css.titleReadBooks}>Прочитано</h2>
    <TemplateToBooks list={list} isEdit />
  </>
);

export default ReadBooks;
