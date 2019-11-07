import { connect } from 'react-redux';
import BooksList from './BooksList';
import {
  getReadBooks,
  getNowReadBooks,
  getPlaneReadBooks,
} from '../../redux/books/booksSelectors';
import { getSummaryModalOpen } from '../../redux/controls/controlsSelectors';
import { haveTraining } from '../../redux/session/sessionSelectors';

const mapStateToProps = state => ({
  summaryModalOpen: getSummaryModalOpen(state),
  readBooks: getReadBooks(state),
  nowReadBooks: getNowReadBooks(state),
  planeReadBooks: getPlaneReadBooks(state),
  isUserHaveTraining: haveTraining(state),
});

export default connect(mapStateToProps)(BooksList);
