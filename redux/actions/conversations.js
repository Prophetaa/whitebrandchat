import { baseUrl } from '../../helpers/constants';
import * as request from 'superagent';

export const CONVERSATIONS_FETCHED = 'CONVERSATIONS_FETCHED';
export const FETCHING_CONVERSATIONS = 'FETCHING_CONVERSATIONS';

export const fetchMyConversations = () => async (dispatch, getState) => {
	let state = getState();
	if (!state.currentUser) return null;
	dispatch({ type: FETCHING_CONVERSATIONS });
	let jwt = state.currentUser.jwt;

	request
		.get(`${baseUrl}/conversations`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(res => dispatch({ type: CONVERSATIONS_FETCHED, payload: res.body }))
		.catch(err => console.log(err));
};
