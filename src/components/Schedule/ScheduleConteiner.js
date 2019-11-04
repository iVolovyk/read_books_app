import { connect } from 'react-redux';
import Schedule from './Schedule';
import { dataSchedule } from '../../redux/results/resultsSelectors';

const mapStateToProps = state => ({
  data: dataSchedule(state),
});

export default connect(mapStateToProps)(Schedule);
