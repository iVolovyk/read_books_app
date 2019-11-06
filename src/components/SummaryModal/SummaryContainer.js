import { compose } from 'redux';
import { connect } from 'react-redux';
import SummaryModal from './SummaryModal';

const mapDispatchToProps = {};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
)(SummaryModal);
