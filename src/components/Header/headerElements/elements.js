import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Header.module.css';
import house from '../../../assets/icons/home/home-24px.svg';
import book from '../../../assets/icons/library/menu_book-24px.svg';

export const logo = (
  <NavLink to="/training" className={css.logo}>
    br
  </NavLink>
);

export const photo = null;

export const name = <p className={css.user}>Martha Stewart</p>;

export const menu = (
  <div className={css.menu}>
    <NavLink
      to="/library"
      className={css.link}
      activeClassName={css.activelink}
    >
      <img src={book} alt="book" className={css.image} />
    </NavLink>
    <NavLink
      to="/training"
      className={css.link}
      activeClassName={css.activelink}
    >
      <img src={house} alt="house" className={css.image} />
    </NavLink>
  </div>
);
