import { connect } from 'react-redux';
import TemplateToBooks from './TemplateToBooks';
import { setSummaryModalOn } from '../../../redux/controls/controlsActions';
import { setIdInSummaryModal } from '../../../redux/bookId/bookIdActions';

const mapDispatchToProps = {
  setSummaryModalOn,
  setIdInSummaryModal,
};

export default connect(
  null,
  mapDispatchToProps,
)(TemplateToBooks);
