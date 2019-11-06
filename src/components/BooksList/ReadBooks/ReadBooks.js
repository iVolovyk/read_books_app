import React from 'react';
import PropTypes from 'prop-types';
import TemplateToBooks from '../TemplateToBooks/TemplateToBooksContainer';
import css from '../BooksList.module.css';

const ReadBooks = ({ listBooks }) => (
  <>
    <h2 className={css.titleReadBooks}>Прочитано</h2>
    <TemplateToBooks list={listBooks} isEdit />
  </>
);
ReadBooks.propTypes = {
  listBooks: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default ReadBooks;
