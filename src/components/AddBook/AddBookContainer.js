import { connect } from 'react-redux';
import AddBook from './AddBook';
import { addBook } from '../../redux/books/booksOperations';

const mapDispatchToProps = {
  addBook,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddBook);
