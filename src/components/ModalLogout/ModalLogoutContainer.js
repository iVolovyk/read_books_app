import { connect } from 'react-redux';
import ModalLogout from './ModalLogout';

// import actions
import { setLogout } from '../../redux/controls/controlsActions';

const mapStateToProps = state => ({
  logout: state.componentController.modalLogoutOpen,
});

const mapDispatchToProps = {
  setLogout,
};

const ModalLogoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalLogout);

export default ModalLogoutContainer;
