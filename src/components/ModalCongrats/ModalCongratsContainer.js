import { connect } from 'react-redux';
import ModalCongrats from './ModalCongrats';
import {
  setModalCongratsOpen,
  setModalCongratsClose,
} from '../../redux/controls/controlsActions';

const mapStateToProps = state => ({
  modalCongratsOpen: state.componentController.modalCongratsOpen,
});

const mapDispatchToProps = {
  setModalCongratsOpen,
  setModalCongratsClose,
};

const ModalLogoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalCongrats);

export default ModalLogoutContainer;
