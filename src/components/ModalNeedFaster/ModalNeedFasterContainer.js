import { connect } from 'react-redux';
import ModalNeedFaster from './ModalNeedFaster';
import {
  setModalNeedFasterOpen,
  resetComponentControls,
  setModalCongratsClose,
} from '../../redux/controls/controlsActions';
import { modalNeedFasterOpen } from '../../redux/controls/controlsSelectors';
import { getTimeEnd } from '../../redux/training/trainingSelectors';
import { closeTraning } from '../../redux/training/trainingOperations';
import { getPhoto } from '../../redux/session/sessionSelectors';

const mapStateToProps = state => ({
  modalNeedFasterOpen: modalNeedFasterOpen(state),
  getTimeEnd: getTimeEnd(state),
  getPhoto: getPhoto(state),
});

const mapDispatchToProps = {
  setModalNeedFasterOpen,
  resetComponentControls,
  setModalCongratsClose,
  closeTraning,
};

const ModalNeedFasterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalNeedFaster);

export default ModalNeedFasterContainer;
