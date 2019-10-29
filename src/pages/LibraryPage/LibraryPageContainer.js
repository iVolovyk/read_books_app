import { connect } from 'react-redux';
import LibraryPage from './LibraryPage';
import { addBooks } from '../../redux/Books/BooksActions';

const mapDispatchToProps = {
  addBooks,
};

export default connect(
  null,
  mapDispatchToProps,
)(LibraryPage);
