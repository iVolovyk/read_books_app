import { connect } from 'react-redux';
import Schedule from './Schedule';
import {
  dataSchedule,
  pagesPerDay,
} from '../../redux/training/trainingSelectors';

const mapStateToProps = state => ({
  data: dataSchedule(state),
  pagesPerDay: pagesPerDay(state),
});

export default connect(mapStateToProps)(Schedule);
