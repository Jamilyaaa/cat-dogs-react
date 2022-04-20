import {createStore, applyMiddleware} from 'redux';
import initState from './initState';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;
