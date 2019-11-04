import { connect } from 'react-redux';
import SummaryModal from './SummaryModal';
import { getFromClickBtnEdit } from '../../redux/bookId/bookIdSelector';

const mapStateToProps = state => ({
  bookFromClickBtnEdit: getFromClickBtnEdit(state),
});

export default connect(mapStateToProps)(SummaryModal);
