import { connect } from 'react-redux';
import Backdrop from './Backdrop';
import { resetComponentControls } from '../../redux/controls/controlsActions';

const mapDispatchToProps = {
  resetComponentControls,
};

export default connect(
  null,
  mapDispatchToProps,
)(Backdrop);
