import LibraryPage from './LibraryPage';
import { connect } from 'react-redux';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const LibraryPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LibraryPage);

export default LibraryPageContainer;
