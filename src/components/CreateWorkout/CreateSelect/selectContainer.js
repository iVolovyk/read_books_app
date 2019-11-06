import { connect } from 'react-redux';
import Select from './Select';
import { getBooksForList } from '../../../redux/books/booksSelectors';

const mapStateToProps = state => ({
  books: getBooksForList(state),
});

const SelectContainer = connect(
  mapStateToProps,
  null,
)(Select);

export default SelectContainer;
