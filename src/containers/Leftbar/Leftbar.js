import { connect } from 'react-redux';

import Leftbar from '../../components/Leftbar/Leftbar';
import * as pokemonServiceActions from '../../redux/actions/pokemon-service-actions';

const mapStateToProps = reducers => {
  return reducers.pokemonServiceReducer;
};

const LeftbarComponent = connect(
  mapStateToProps,
  pokemonServiceActions
)(Leftbar);

export default LeftbarComponent;