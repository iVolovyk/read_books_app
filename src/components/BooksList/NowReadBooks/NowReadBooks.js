import React from 'react';
import PropTypes from 'prop-types';
import TemplateToBooks from '../TemplateToBooks/TemplateToBooksContainer';
import css from '../BooksList.module.css';

const NowReadBooks = ({ listBooks }) => (
  <>
    <h2 className={css.titleReadBooks}>Читаю</h2>
    <TemplateToBooks list={listBooks} />
  </>
);
NowReadBooks.propTypes = {
  listBooks: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default NowReadBooks;
