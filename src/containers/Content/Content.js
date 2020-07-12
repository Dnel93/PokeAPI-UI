import {connect} from 'react-redux';
import Content from '../../components/Content/Content';

const mapStateToProps = reducers => {
  return reducers.pokemonServiceReducer;
};

const ContentComponent = connect(mapStateToProps, null)(Content);

export default ContentComponent;