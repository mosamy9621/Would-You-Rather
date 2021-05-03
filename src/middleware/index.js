import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux';
/**
 * returns object to be passed to createStore function
 */
export default applyMiddleware(thunk);
