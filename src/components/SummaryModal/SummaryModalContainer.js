import { connect } from 'react-redux';
import SummaryModal from './SummaryModal';
import {
  getFromClickBtnEditRating,
  getFromClickBtnEditComment,
} from '../../redux/bookId/bookIdSelector';

const mapStateToProps = state => ({
  bookFromClickBtnEditRating: getFromClickBtnEditRating(state),
  bookFromClickBtnEditComment: getFromClickBtnEditComment(state),
});

export default connect(mapStateToProps)(SummaryModal);
