import React from 'react';
import TemplateToBooks from '../TemplateToBooks/TemplateToBooks';
import css from '../BooksList.module.css';

const PlanReadBooks = list => (
  <>
    <h2 className={css.titleTable}>Маю намір прочитати</h2>
    <TemplateToBooks list={list} />
  </>
);

export default PlanReadBooks;
