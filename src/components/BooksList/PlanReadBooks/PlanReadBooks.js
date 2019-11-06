import React from 'react';
import PropTypes from 'prop-types';
import TemplateToBooks from '../TemplateToBooks/TemplateToBooksContainer';
import css from '../BooksList.module.css';

const PlanReadBooks = ({ listBooks }) => (
  <>
    <h2 className={css.titleReadBooks}>Маю намір прочитати</h2>
    <TemplateToBooks list={listBooks} />
  </>
);

PlanReadBooks.propTypes = {
  listBooks: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
export default PlanReadBooks;
