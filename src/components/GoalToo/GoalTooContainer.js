import { connect } from 'react-redux';
import {
  getBooksForCheckList,
  getTimeStart,
  getTimeEnd,
} from '../../redux/training/trainingSelectors';
import GoalToo from './GoalToo';

const mapStateToProps = store => ({
  books: getBooksForCheckList(store),
  timeStart: getTimeStart(store),
  timeEnd: getTimeEnd(store),
});

export default connect(mapStateToProps)(GoalToo);
