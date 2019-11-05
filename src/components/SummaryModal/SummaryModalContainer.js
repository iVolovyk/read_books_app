import { connect } from 'react-redux';
import SummaryModal from './SummaryModal';
import {
  getFromClickBtnEditRating,
  getFromClickBtnEditComment,
  getBookId,
} from '../../redux/bookId/bookIdSelector';
import { changeBookStats } from '../../redux/books/booksOperations';

const mapStateToProps = state => ({
  bookId: getBookId(state),
  bookFromClickBtnEditRating: getFromClickBtnEditRating(state),
  bookFromClickBtnEditComment: getFromClickBtnEditComment(state),
});

const mapDispatchToProps = { changeBookStats };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummaryModal);
