import io from 'socket.io-client';
import { Constants } from '../config';

export default class SocketIO {
	socket = null;

	connect(dispatch, jwt) {
		console.log('Connecting websocket');
		this.socket = io.connect(Constants.baseUrl, {
			timeout: 1000,
			transports: ['websocket'],
			autoConnect: true,
			query: `auth_token=${jwt}`,
		});
		this.socket.on('action', payload => dispatch(payload));
	}

	emit(action, conversationId) {
		this.socket.emit(action, conversationId);
	}

	disconnect() {
		console.log('Disconnecting websocket');
		this.socket.disconnect();
	}
}
