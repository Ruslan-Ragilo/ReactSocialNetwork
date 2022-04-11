import {combineReducers, createStore} from 'redux';
import messagesStateReducer from './messagesStateReducer';
import sidebarReducer from './sidebarReducer';
import profileStateReducer from './profileStateReducer';

let reducers = combineReducers({
  profileState: profileStateReducer,
  sidebar: sidebarReducer,
  messagesState: messagesStateReducer
});

let store = createStore(reducers);

export default store;