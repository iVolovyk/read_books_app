import { connect } from 'react-redux';
import ResultForm from './ResultForm';
import { onSetResult } from '../../redux/results/resultsActions';

const mapDispatchToProps = {
  onSetResult,
};

export default connect(
  null,
  mapDispatchToProps,
)(ResultForm);
