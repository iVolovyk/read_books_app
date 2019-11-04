import { connect } from 'react-redux';
import Result from './Result';
import { getResult } from '../../redux/training/trainingSelectors';

const mapStateToProps = state => ({
  result: getResult(state),
});

export default connect(mapStateToProps)(Result);
