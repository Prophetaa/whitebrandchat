import io from 'socket.io-client';
import { Constants } from '../config';

class SocketIO {
	socket = null;

	connect(dispatch, jwt) {
		this.socket = io.connect(Constants.baseUrl, {
			reconnection: true,
			reconnectionDelay: 300,
			reconnectionAttempts: Infinity,
			transports: ['websocket'],
			query: `auth_token=${jwt}`,
		});
		this.socket.on('action', payload => dispatch(payload));
	}

	emit(action, conversationId) {
		this.socket.emit(action, conversationId);
	}

	disconnect() {
		this.socket.disconnect();
	}
}

export default SocketIO;
