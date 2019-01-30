import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { maps } from './map.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  maps
});

export default rootReducer;