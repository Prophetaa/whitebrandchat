import Constants from '../../config/Constants';
import * as request from 'superagent';

export const CONVERSATIONS_FETCHED = 'CONVERSATIONS_FETCHED';
export const FETCHING_CONVERSATIONS = 'FETCHING_CONVERSATIONS';
export const FETCHING_CONVERSATIONS_ERROR = 'FETCHING_CONVERSATIONS_ERROR';

export const CREATE_SOCKET_ROOMS = 'CREATE_SOCKET_ROOMS';

export const deleteConversation = conversationId => (dispatch, getState) => {
	let state = getState();
	if (!state.currentUser) return null;
	let jwt = state.currentUser.jwt;

	request
		.put(`${Constants.baseUrl}/conversations/${conversationId}`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(res => {})
		.catch(err => {
			console.log(err);
		});
};

export const fetchMyConversations = () => async (dispatch, getState) => {
	let state = getState();
	if (!state.currentUser) return null;
	dispatch({ type: FETCHING_CONVERSATIONS });
	let jwt = state.currentUser.jwt;

	request
		.get(`${Constants.baseUrl}/conversations`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(res => {
			dispatch({ type: CREATE_SOCKET_ROOMS, payload: res.body });
			dispatch({ type: CONVERSATIONS_FETCHED, payload: res.body });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: FETCHING_CONVERSATIONS_ERROR });
		});
};
