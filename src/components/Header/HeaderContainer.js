import { connect } from 'react-redux';
import Header from './Header';
import { setLogout } from '../../redux/controls/controlsActions';
import {
  getIsAuthenticated,
  getUser,
} from '../../redux/session/sessionSelectors';

const mapStateToProps = state => ({
  logout: state.componentController.modalLogoutOpen,
  isAuthenticated: getIsAuthenticated(state),
  user: getUser(state),
});

const mapDispatchToProps = {
  setLogout,
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
