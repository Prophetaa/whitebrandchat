import * as request from 'superagent';

import { Constants } from '../../config';

export const TEXT_CHANGED = 'TEXT_CHANGED';

export const CREATING_CONVERSATION = 'CREATING_CONVERSATION';
export const CONVERSATION_CREATED = 'CONVERSATION_CREATED';
export const CONVERSATION_CREATION_FAILED = 'CONVERSATION_CREATION_FAILED';

export const FETCHING_CONVERSATION_MESSAGES = 'FETCHING_CONVERSATION_MESSAGES';
export const CONVERSATION_MESSAGES_FETCHED = 'CONVERSATION_MESSAGES_FETCHED';
export const CONVERSATION_MESSAGES_FETCHING_FAILED =
	'CONVERSATION_MESSAGES_FETCHING_FAILED';

export const SENDING_MESSAGE = 'SENDING_MESSAGE';
export const IMAGE_ATTACHED = 'IMAGE_ATTACHED';
export const MESSAGE_SENT_SUCCESS = 'MESSAGE_SENT_SUCCESS';
export const NEW_MESSAGE_RECEIVED = 'NEW_MESSAGE_RECEIVED';
export const MESSAGE_SENT_ERROR = 'MESSAGE_SENT_ERROR';
export const CLEAR_CURRENT_CONVERSATION_REDUCER =
	'CLEAR_CURRENT_CONVERSATION_REDUCER';
export const REMOVE_ATTACHED_IMAGE = 'REMOVE_ATTACHED_IMAGE';

export const onTextChange = payload => ({
	type: TEXT_CHANGED,
	payload: payload.nativeEvent.text,
});

export const attachImage = payload => ({
	type: IMAGE_ATTACHED,
	payload,
});

export const clearUploadedImage = () => ({
	type: REMOVE_ATTACHED_IMAGE,
});

export const clearCurrentConversationReducer = () => ({
	type: CLEAR_CURRENT_CONVERSATION_REDUCER,
});

export const createConversation = phoneNumber => (dispatch, getState) => {
	let state = getState();
	if (!state.currentUser) return null;
	dispatch({ type: CREATING_CONVERSATION });
	let jwt = state.currentUser.jwt;

	request
		.post(`${Constants.baseUrl}/conversations`)
		.set('Authorization', `Bearer ${jwt}`)
		.send({ phoneNumber })
		.then(res => dispatch({ type: CONVERSATION_CREATED, payload: res.body }))
		.catch(err => {
			console.log(err);
			dispatch({ type: CONVERSATION_CREATION_FAILED, payload: err.body });
		});
};

export const fetchConversationMessages = conversationId => (
	dispatch,
	getState
) => {
	let state = getState();
	if (!state.currentUser) return null;
	dispatch({ type: FETCHING_CONVERSATION_MESSAGES, payload: conversationId });
	let jwt = state.currentUser.jwt;

	request
		.get(`${Constants.baseUrl}/conversations/${conversationId}`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(res =>
			dispatch({ type: CONVERSATION_MESSAGES_FETCHED, payload: res.body })
		)
		.catch(err => {
			console.log(err);
			dispatch({
				type: CONVERSATION_MESSAGES_FETCHING_FAILED,
				payload: err.body,
			});
		});
};

export const sendMessage = () => (dispatch, getState) => {
	const state = getState();
	if (!state.currentUser) {
		return null;
	}
	const currentConversation = state.Conversation.currentConversation;
	const jwt = state.currentUser.jwt;

	if (currentConversation.messageToSend.text === '') {
		return null;
	}
	dispatch({ type: SENDING_MESSAGE });

	request
		.post(
			`${Constants.baseUrl}/conversations/${
				currentConversation.conversationId
			}`
		)
		.set('Authorization', `Bearer ${jwt}`)
		.send(currentConversation.messageToSend)
		.then(res => dispatch({ type: MESSAGE_SENT_SUCCESS, payload: res.body }))
		.catch(err => {
			console.log(err);
			dispatch({
				type: MESSAGE_SENT_ERROR,
				payload: err.body,
			});
		});
};
