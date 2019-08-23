import * as request from 'superagent';
import { Constants } from '../../config';

export const CONVERSATION_MEDIA_FETCHED = 'CONVERSATION_MEDIA_FETCHED';

export const fetchConversationMedia = conversationId => (
	dispatch,
	getState
) => {
	const state = getState();
	if (!state.currentUser) {
		return null;
	}
	const jwt = state.currentUser.jwt;

	request
		.get(`${Constants.baseUrl}/conversations/${conversationId}/media`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(res =>
			dispatch({ type: CONVERSATION_MEDIA_FETCHED, payload: res.body })
		)
		.catch(err => console.log(err));
};
