import { connect } from 'react-redux';
import TrainingPage from './TrainingPage';

const mapStateToProps = (state, props) => ({
  goal: true,
  openmodal: false,
});

export default connect(mapStateToProps)(TrainingPage);
