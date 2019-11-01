import { connect } from 'react-redux';
import LibraryPage from './LibraryPage';

// const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const LibraryPageContainer = connect(
  null,
  mapDispatchToProps,
)(LibraryPage);

export default LibraryPageContainer;
