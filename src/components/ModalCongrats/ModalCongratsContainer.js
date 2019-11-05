import { connect } from 'react-redux';
import ModalCongrats from './ModalCongrats';
import {
  setModalCongratsOpen,
  setModalCongratsClose,
} from '../../redux/controls/controlsActions';
import { closeTraning } from '../../redux/training/trainingOperations';
import {
  totalPage,
  totalReadPage,
} from '../../redux/training/trainingSelectors';
import { modalCongratsOpen } from '../../redux/controls/controlsSelectors';

const mapStateToProps = state => ({
  modalCongratsOpen: modalCongratsOpen(state),
  totalPage: totalPage(state),
  totalReadPage: totalReadPage(state),
});

const mapDispatchToProps = {
  setModalCongratsOpen,
  setModalCongratsClose,
  closeTraning,
};

const ModalLogoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalCongrats);

export default ModalLogoutContainer;
