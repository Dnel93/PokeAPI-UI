import { connect } from 'react-redux';
import { closeAlert } from '../../redux/actions/pokemon-service-actions';

import Alert from '../../components/Alert/Alert';

const AlertComponent = connect(null, {closeAlert})(Alert);

export default AlertComponent;