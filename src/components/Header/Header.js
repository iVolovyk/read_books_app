import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import house from '../../assets/icons/home/home-24px.svg';
import book from '../../assets/icons/library/menu_book-24px.svg';
import ModalLogoutContainer from '../ModalLogout/ModalLogoutContainer';
// import Backdrop from '../Backdrop/Backdrop';

const Header = ({ name, logout, setLogout, isAuthenticated }) => {
  const photo = null;
  const photoPresent = photo || 'm';
  // const isOpen = false;
  let modal = null;
  if (logout) modal = <ModalLogoutContainer />;
  return (
    <div className="container">
      <div className={css.header}>
        <div className={css.group}>
          <NavLink to="/library" className={css.logo}>
            br
          </NavLink>
        </div>

        {isAuthenticated && (
          <>
            <div className={css.group}>
              <div className={css.mailLink}>{photoPresent}</div>
              <p className={css.user}>{name}</p>
            </div>
            <div className={css.group}>
              <NavLink
                to="/library"
                className={css.linkButton}
                activeClassName="active-link"
              >
                <img src={book} alt="book" className={css.image} />
              </NavLink>
              <NavLink
                to="/training"
                className={css.linkButton}
                activeClassName="active-link"
              >
                <img src={house} alt="house" className={css.image} />
              </NavLink>

              <button
                type="button"
                className={css.button}
                onClick={() => setLogout(true)}
              >
                Вихід
              </button>

              {modal}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.bool.isRequired,
  setLogout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
