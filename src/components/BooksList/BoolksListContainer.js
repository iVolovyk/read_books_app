import { connect } from 'react-redux';
import BooksList from './BooksList';
import {
  getReadBooks,
  getNowReadBooks,
  getPlaneReadBooks,
} from '../../redux/books/booksSelectors';
import { getSummaryModalOpen } from '../../redux/controls/controlsSelectors';

const mapStateToProps = state => ({
  summaryModalOpen: getSummaryModalOpen(state),
  readBooks: getReadBooks(state),
  nowReadBooks: getNowReadBooks(state),
  planeReadBooks: getPlaneReadBooks(state),
});

export default connect(mapStateToProps)(BooksList);
