import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './rootReducer';
import ReduxThunk from 'redux-thunk';
import { socketIo } from './middleware';
import SocketIO from '../helpers/socketio';

export const socket = new SocketIO();

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const enhancer = compose(
	applyMiddleware(ReduxThunk, socketIo(socket)),
	devTools
);

const store = createStore(reducers, enhancer);

const initialCurrentUser = store.getState().currentUser;

if (initialCurrentUser) {
	socket.connect(store.dispatch, initialCurrentUser.jwt);
}

export default store;
