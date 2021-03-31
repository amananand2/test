import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from "redux-logger";
import {reducers} from "./reducer/index";
import rootSaga from './saga/saga';

const sagaMiddleware = createSagaMiddleware()
const initalState = {};
const logger = createLogger({ collapsed: true });
const middlewares = [sagaMiddleware, logger];

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)
sagaMiddleware.run(rootSaga)

export default store;

// const action = type => store.dispatch({type})
