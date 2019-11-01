import { connect } from 'react-redux';
import TrainingPage from './TrainingPage';

// state, props
const mapStateToProps = () => ({
  goal: false,
  openmodal: false,
});

export default connect(mapStateToProps)(TrainingPage);
