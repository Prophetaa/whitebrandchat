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
export const OTHER_USER_FETCHED = 'OTHER_USER_FETCHED';

export const SENDING_MESSAGE = 'SENDING_MESSAGE';
export const IMAGE_ATTACHED = 'IMAGE_ATTACHED';
export const MESSAGE_SENT_SUCCESS = 'MESSAGE_SENT_SUCCESS';
export const NEW_MESSAGE_RECEIVED = 'NEW_MESSAGE_RECEIVED';
export const MESSAGE_SENT_ERROR = 'MESSAGE_SENT_ERROR';
export const MESSAGE_DELETED = 'MESSAGE_DELETED';
export const CLEAR_CURRENT_CONVERSATION_REDUCER =
	'CLEAR_CURRENT_CONVERSATION_REDUCER';
export const REMOVE_ATTACHED_IMAGE = 'REMOVE_ATTACHED_IMAGE';
export const REPLY_TO_MESSAGE_ADD = 'REPLY_TO_MESSAGE_ADDED';
export const REPLY_TO_MESSAGE_REMOVE = 'REPLY_TO_MESSAGE_REMOVED';
export const ADD_MESSAGE_TO_RECYCLE = 'ADD_MESSAGE_TO_RECYCLE';
export const MESSAGE_RECYCLED = 'MESSAGE_RECYCLED';

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

export const replyToMessage = messageIndex => ({
	type: REPLY_TO_MESSAGE_ADD,
	payload: messageIndex,
});

export const removeReplyTo = () => ({
	type: REPLY_TO_MESSAGE_REMOVE,
});

export const recycleMessage = messageIndex => ({
	type: ADD_MESSAGE_TO_RECYCLE,
	payload: messageIndex,
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

export const fetchOtherUserInfo = conversationId => (dispatch, getState) => {
	let state = getState();
	if (!state.currentUser) return null;
	let jwt = state.currentUser.jwt;

	request
		.get(`${Constants.baseUrl}/conversations/${conversationId}/userInfo`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(res => dispatch({ type: OTHER_USER_FETCHED, payload: res.body }))
		.catch(err => console.log(err));
};

export const sendMessage = () => async (dispatch, getState) => {
	const state = getState();
	if (!state.currentUser) {
		return null;
	}
	const currentConversation = state.Conversation.currentConversation;
	const jwt = state.currentUser.jwt;
	const { text, attachedImage } = currentConversation.messageToSend;
	if (text === '' && !attachedImage) {
		return null;
	}
	dispatch({ type: SENDING_MESSAGE });

	currentConversation.messageToRecycle
		? request
				.put(`${Constants.baseUrl}/recycle/message`)
				.set('Authorization', `Bearer ${jwt}`)
				.send({
					...currentConversation.messageToRecycle,
					text: currentConversation.messageToRecycle.text.trim(),
				})
				.then(() => dispatch({ type: MESSAGE_SENT_SUCCESS }))
				.catch(err => console.log(err))
		: request
				.post(
					`${Constants.baseUrl}/conversations/${
						currentConversation.conversationId
					}`
				)
				.set('Authorization', `Bearer ${jwt}`)
				.send({
					...currentConversation.messageToSend,
					text: currentConversation.messageToSend.text.trim(),
				})
				.then(() => dispatch({ type: MESSAGE_SENT_SUCCESS }))
				.catch(err => {
					console.log(err);
					dispatch({
						type: MESSAGE_SENT_ERROR,
						payload: err.body,
					});
				});
};

export const deleteMessage = messageId => (dispatch, getState) => {
	const state = getState();
	if (!state.currentUser) {
		return null;
	}
	const jwt = state.currentUser.jwt;

	request
		.put(`${Constants.baseUrl}/message/${messageId}`)
		.set('Authorization', `Bearer ${jwt}`)
		.catch(err => console.log(err));
};
