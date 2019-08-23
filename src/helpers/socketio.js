import io from 'socket.io-client';
import { Constants } from '../config';
<<<<<<< HEAD
window.navigator.userAgent = 'ReactNative';
=======

>>>>>>> 89a19bf5edfb60cff1c156c4a1637947c388cf74
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
