import {combineReducers} from 'redux';
import auth from '../../auth/redux/reducer';
import movies from '../../movie/redux/reducer';

export default combineReducers({
  auth,
  movies,
});
