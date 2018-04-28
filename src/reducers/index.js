import { combineReducers } from 'redux';
import auth from './auth';
//import menuRed from './menuRed';

const app = combineReducers({
    auth
   // menuRed
});


export default app;