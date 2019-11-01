import React from 'react';
import TemplateToBooks from '../TemplateToBooks/TemplateToBooksContainer';
import css from '../BooksList.module.css';

const NowReadBooks = list => (
  <>
    <h2 className={css.titleTable}>Читаю</h2>
    <TemplateToBooks list={list} />
  </>
);

export default NowReadBooks;
