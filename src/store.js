import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import callHistoryReducer from './reducers';

export default createStore(callHistoryReducer, applyMiddleware(thunk));
