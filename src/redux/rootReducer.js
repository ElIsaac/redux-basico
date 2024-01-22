// redux/rootReducer.js
import { combineReducers } from 'redux';
import fechaReducer from './fechaReducer';
import nombreReducer from './nombreReducer';

const rootReducer = combineReducers({
  fecha: fechaReducer,
  nombre: nombreReducer,
});

export default rootReducer;
