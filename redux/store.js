import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const enhancer = compose(
	applyMiddleware(ReduxThunk),
	devTools
);

export default createStore(reducers, enhancer);
