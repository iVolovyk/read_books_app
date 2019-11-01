import { compose } from 'redux';
import { connect } from 'react-redux';
import getAllUserInfo from '../../hoc/getAllUserInfo';
import TrainingPage from './TrainingPage';
import { haveTraining } from '../../redux/session/sessionSelectors';

// state, props
const mapStateToProps = state => ({
  goal: true, // haveTraining(state),
  openmodal: false,
});

export default compose(
  connect(mapStateToProps),
  getAllUserInfo,
)(TrainingPage);
