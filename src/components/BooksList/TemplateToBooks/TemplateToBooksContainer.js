import { connect } from 'react-redux';
import TemplateToBooks from './TemplateToBooks';
import { setSummaryModalOn } from '../../../redux/controls/controlsActions';

const mapDispatchToProps = {
  setSummaryModalOn,
};

export default connect(
  null,
  mapDispatchToProps,
)(TemplateToBooks);
