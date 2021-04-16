import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from "redux-logger";
import {reducers} from "./reducer/index";
import rootSaga from './saga/saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()
const initalState = {};
const logger = createLogger({ collapsed: true });
const middlewares = [sagaMiddleware, logger];

const persistConfig = { // configuration object for redux-persist
  key: 'root',
  storage:storage, // define which storage to use
  whitelist: ['uvationData'] 
}

const persistedReducer = persistReducer(persistConfig, reducers)


const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
)

const  persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export {store,persistor};

// const action = type => store.dispatch({type})
