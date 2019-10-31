import { connect } from 'react-redux';
import AddBook from './AddBook';
import { addBooks } from '../../redux/books/booksActions';

const mapDispatchToProps = {
  addBooks,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddBook);
