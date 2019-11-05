import { connect } from 'react-redux';
import Goal from './Goal';
import {
  getBooksForCheckList,
  getTimeStart,
  getTimeEnd,
  getNeedToRead,
} from '../../redux/training/trainingSelectors';

const mapStateToProps = store => ({
  books: getBooksForCheckList(store),
  timeStart: getTimeStart(store),
  timeEnd: getTimeEnd(store),
  NeedToRead: getNeedToRead(store),
});

export default connect(mapStateToProps)(Goal);
