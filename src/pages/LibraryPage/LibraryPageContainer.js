import { compose } from 'redux';
import { connect } from 'react-redux';
import getAllUserInfo from '../../hoc/getAllUserInfo';
import LibraryPage from './LibraryPage';

// const mapStateToProps = state => ({});

const mapDispatchToProps = {};

connect(
  null,
  mapDispatchToProps,
)(LibraryPage);

const LibraryPageContainer = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  getAllUserInfo,
)(LibraryPage);

export default LibraryPageContainer;
