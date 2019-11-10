import { connect } from 'react-redux';
import CreateWorkout from './CreateWorkout';
import { getBooksForList } from '../../redux/books/booksSelectors';
import { sendTraining } from '../../redux/training/trainingOperations';
import { addDayNeed, addBookNeedRead } from '../../redux/goal/goalActions';

const mapStateToProps = state => ({
  books: getBooksForList(state),
});

// const mapDispatchToProps = dispatch => ({
//   sendTraining: p => dispatch(sendTraining(p)),
//   addDayNeed: p => dispatch(addDayNeed(p)),
//   addBookNeedRead: p => dispatch(addBookNeedRead(p)),
// });

const mapDispatchToProps = {
  sendTraining,
  addDayNeed,
  addBookNeedRead,
};

const CreateWorkoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateWorkout);

export default CreateWorkoutContainer;
