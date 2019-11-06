import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Header.module.css';
import ModalLogoutContainer from '../ModalLogout/ModalLogoutContainer';
import { logo, menu } from './headerElements/elements';

class Header extends Component {
  state = { deviceWidth: 0 };

  componentDidMount() {
    this.setState({ deviceWidth: document.documentElement.clientWidth });
  }

  render() {
    const { logout, setLogout, isAuthenticated, user } = this.props;

    let fullname = '';
    let src = '';

    if (user) {
      fullname = user.name.fullName;
      src = user.photo;
    }

    const letter = <div className={css.empty}>{fullname[0]}</div>;
    const img = (
      <div className={css.photo}>
        <img src={src} alt="user" width="33" height="33" />
      </div>
    );
    let photo = src ? img : letter;

    let name = <p className={css.user}>{fullname}</p>;

    let modal = null;
    if (logout) modal = <ModalLogoutContainer />;

    const tabletWidth = 768;
    const { deviceWidth } = this.state;
    const mobile = deviceWidth < tabletWidth;

    const authentified = isAuthenticated;

    const exit = (
      <button
        type="button"
        className={css.button}
        onClick={() => setLogout(true)}
      >
        Вихід
      </button>
    );

    photo = authentified ? photo : null;
    name = authentified ? name : null;
    const menuObj = authentified ? menu : null;
    const exitObj = authentified ? exit : null;

    const groupTwo = mobile ? (
      <div className={css.group}>
        {menuObj}
        {photo}
        {exitObj}
      </div>
    ) : (
      <div className={css.group}>
        {photo}
        {name}
      </div>
    );

    const groupThree = mobile ? null : (
      <div className={css.group}>
        {menuObj}
        {exitObj}
      </div>
    );

    const content =
      mobile && !authentified ? (
        <div className={css.content} style={{ justifyContent: 'center' }}>
          {logo}
        </div>
      ) : (
        <div className={css.content}>
          {logo}
          {groupTwo}
          {groupThree}
        </div>
      );

    return (
      <div className={css.header}>
        <div className="container">
          {content}
          {modal}
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  user: PropTypes.shape({
    haveTraining: false,
    photo: '',
    name: PropTypes.shape({
      firstName: '',
      lastName: '',
    }),
  }),
};

Header.propTypes = {
  logout: PropTypes.bool.isRequired,
  setLogout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    haveTraining: PropTypes.bool,
    photo: PropTypes.string,
    name: PropTypes.shape({
      firstName: PropTypes.string,
      fullName: PropTypes.string.isRequired,
      lastName: PropTypes.string,
    }),
  }),
};

export default Header;
