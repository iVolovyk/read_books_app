import { connect } from 'react-redux';
import ResultForm from './ResultForm';
import { onSetResult } from '../../redux/training/trainingOperations';

const mapDispatchToProps = {
  onSetResult,
};

const mapStateToProps = state => ({
  timeStart: state.training.timeStart,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultForm);
