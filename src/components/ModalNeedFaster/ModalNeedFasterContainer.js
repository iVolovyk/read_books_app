import { connect } from 'react-redux';
import ModalNeedFaster from './ModalNeedFaster';
import {
  setModalNeedFasterOpen,
  resetComponentControls,
} from '../../redux/controls/controlsActions';
import { modalNeedFasterOpen } from '../../redux/controls/controlsSelectors';

const mapStateToProps = state => ({
  modalNeedFasterOpen: modalNeedFasterOpen(state),
});

const mapDispatchToProps = {
  setModalNeedFasterOpen,
  resetComponentControls,
};

const ModalNeedFasterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalNeedFaster);

export default ModalNeedFasterContainer;
