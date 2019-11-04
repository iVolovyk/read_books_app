import { connect } from 'react-redux';
import CreateWorkout from './CreateWorkout';
import { getBooksForList } from '../../redux/books/booksSelectors';

const mapStateToProps = state => ({
  books: getBooksForList(state),
});

const CreateWorkoutContainer = connect(
  mapStateToProps,
  null,
)(CreateWorkout);

export default CreateWorkoutContainer;
