import { connect } from 'react-redux';
import Result from './Result';
import { getResult } from '../../redux/results/resultsSelectors';

const mapStateToProps = (state, props) => ({
  result: getResult(state),
});

export default connect(mapStateToProps)(Result);
