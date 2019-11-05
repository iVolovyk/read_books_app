import { connect } from 'react-redux';
import BooksList from './BooksList';
// import { getPlaneReadBooks } from '../../redux/books/booksSelectors';

const mapStateToProps = state => ({
  summaryModalOpen: state.componentController.summaryModalOpen,
  // readBooks: getReadBooks(state),
  // nowReadBooks: getNowReadBooks(state),
  // planeReadBooks: getPlaneReadBooks(state),
});
// TODO  get method for store state in Section

export default connect(mapStateToProps)(BooksList);
