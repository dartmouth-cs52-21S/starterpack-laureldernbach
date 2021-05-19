// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CountReducer from './count-reducer';
import HellosReducer from './hellos-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  hello: HellosReducer,
});

export default rootReducer;
