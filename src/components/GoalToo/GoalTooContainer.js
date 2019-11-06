import { connect } from 'react-redux';
import { DayNeed, BookNeedRead } from '../../redux/goal/goalSelectors';
import GoalToo from './GoalToo';

const mapStateToProps = store => ({
  books: BookNeedRead(store),
  day: DayNeed(store),
});

export default connect(mapStateToProps)(GoalToo);
