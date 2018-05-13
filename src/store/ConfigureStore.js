import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../RootReducer';
import {createLogger} from 'redux-logger';

export default function ConfigureStore(initialState) {
    const logger = createLogger();
    return createStore(
        RootReducer,
        initialState,
        applyMiddleware(thunk,logger)
    );
}