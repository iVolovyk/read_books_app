import { connect } from 'react-redux';
import {
  getBooksForCheckList,
  getTrainingId,
  getReadPages,
  getReadPagesCheked,
} from '../../redux/training/trainingSelectors';

import { addChekedBook } from '../../redux/training/trainingOperations';
import WorkoutInfo from './WorkoutInfo';

const mapStateToProps = store => ({
  books: getBooksForCheckList(store),
  TrainingId: getTrainingId(store),
  ReadPages: getReadPages(store),
  ReadPagesCheked: getReadPagesCheked(store),
});

const mapDispatchToProps = {
  addChekedBook,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkoutInfo);
