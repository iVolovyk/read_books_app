import { connect } from 'react-redux';
import Header from './Header';
import { setLogout } from '../../redux/controls/controlsActions';

const mapStateToProps = state => ({
  logout: state.componentController.modalLogoutOpen,
});

const mapDispatchToProps = {
  setLogout,
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
