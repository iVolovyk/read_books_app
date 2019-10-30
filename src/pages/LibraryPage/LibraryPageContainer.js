import { connect } from 'react-redux';
import LibraryPage from './LibraryPage';
import { addBooks } from '../../redux/books/booksActions';

const mapDispatchToProps = {
  addBooks,
};

export default connect(
  null,
  mapDispatchToProps,
)(LibraryPage);
