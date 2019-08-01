import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../modules/Login/actions';
import { JWT_REHIDRATION_SUCCESSFUL } from '../modules/Auth/actions';
import {
	CREATE_SOCKET_ROOMS,
	NEW_CONVERSATION_CREATED,
} from '../modules/Home/actions';

export const socketIo = socketio => store => next => action => {
	if (
		action.type === USER_LOGIN_SUCCESS ||
		action.type === JWT_REHIDRATION_SUCCESSFUL
	) {
		const jwt = action.payload.jwt;
		socketio.connect(store.dispatch, jwt);
	}

	if (action.type === CREATE_SOCKET_ROOMS) {
		action.payload.map(conversation =>
			socketio.emit('subscribe', conversation.id)
		);
	}

	if (action.type === NEW_CONVERSATION_CREATED) {
		socketio.emit('subscribe', action.payload.id);
	}

	if (action.type === USER_LOGOUT) {
		socketio.disconnect();
	}

	next(action);
};
