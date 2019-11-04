import { connect } from 'react-redux';
import ModalCongrats from './ModalCongrats';

const mapStateToProps = state => ({
  modalCongratsOpen: state.componentController.modalCongratsOpen,
});

// const mapDispatchToProps = {
//   setModalCongratsOpen,
// };

const ModalLogoutContainer = connect(mapStateToProps)(ModalCongrats);

export default ModalLogoutContainer;
