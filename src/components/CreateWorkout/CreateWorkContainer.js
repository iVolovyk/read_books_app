import { connect } from 'react-redux';
import CreateWorkout from './CreateWorkout';
import { getBooksForList } from '../../redux/books/booksSelectors';
import { sendTraining } from '../../redux/training/trainingOperations';

const mapStateToProps = state => ({
  books: getBooksForList(state),
});

const mapDispatchToProps = { sendTraining };

const CreateWorkoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateWorkout);

export default CreateWorkoutContainer;
