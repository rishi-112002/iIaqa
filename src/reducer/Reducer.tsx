import { combineReducers } from 'redux';
import DrawerReducer from './DrawerReducer';

const rootReducer = combineReducers({
  drawer: DrawerReducer,
});

export default rootReducer;