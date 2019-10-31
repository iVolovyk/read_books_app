import { connect } from 'react-redux';
import BooksList from './BooksList';

const mapStateToProps = state => ({
  readBooks: state,
  nowReadBooks: state,
  planeReadBooks: state,
});
// TODO  get method for store state in Section

export default connect(mapStateToProps)(BooksList);
