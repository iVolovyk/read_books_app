import { connect } from 'react-redux';
import Result from './Result';

const mapStateToProps = (state, props) => ({
  goal: true,
  openmodal: false,
});

export default connect(mapStateToProps)(Result);
