import React from 'react';
import TemplateToBooks from '../TemplateToBooks/TemplateToBooksContainer';
import css from '../BooksList.module.css';

const PlanReadBooks = list => (
  <>
    <h2 className={css.titleReadBooks}>Маю намір прочитати</h2>
    <TemplateToBooks list={list} />
  </>
);

export default PlanReadBooks;
