import { connect } from 'react-redux';
import Result from './Result';
import { sortResult } from '../../redux/training/trainingSelectors';

const mapStateToProps = state => ({
  sortResult: sortResult(state),
});

export default connect(mapStateToProps)(Result);
