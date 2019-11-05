import { connect } from 'react-redux';
import { getTimeEnd } from '../../redux/training/trainingSelectors';
import DablTimer from './DablTimer';

const mapStateToProps = store => ({
  timeEnd: getTimeEnd(store),
});

export default connect(mapStateToProps)(DablTimer);
