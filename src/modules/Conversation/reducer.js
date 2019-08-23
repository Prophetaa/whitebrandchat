import {
	TEXT_CHANGED,
	CREATING_CONVERSATION,
	CONVERSATION_CREATION_FAILED,
	CONVERSATION_CREATED,
	FETCHING_CONVERSATION_MESSAGES,
	CONVERSATION_MESSAGES_FETCHED,
	CONVERSATION_MESSAGES_FETCHING_FAILED,
	SENDING_MESSAGE,
	CLEAR_CURRENT_CONVERSATION_REDUCER,
	NEW_MESSAGE_RECEIVED,
	REMOVE_ATTACHED_IMAGE,
	IMAGE_ATTACHED,
	MESSAGE_DELETED,
	REPLY_TO_MESSAGE_ADD,
	REPLY_TO_MESSAGE_REMOVE,
	OTHER_USER_FETCHED,
	ADD_MESSAGE_TO_RECYCLE,
	MESSAGE_RECYCLED,
} from './actions';
import { CLEAN_CONVERSATION_REDUCER_STATE } from '../Contacts/actions';
import { CONVERSATION_MEDIA_FETCHED } from '../UserInfo/actions';

let initialState = {
	currentConversation: {
		conversationId: null,
		otherUserInfo: {},
		messages: [],
		media: [],
		loading: false,
		error: false,
		messageToSend: {
			text: '',
			attachedImage: null,
			replyTo: null,
		},
		messageToRecycle: null,
	},
	fetching: false,
	creation: {
		redirectToId: null,
		loading: false,
		error: false,
	},
};

export default function(state = initialState, { type, payload }) {
	const { creation, currentConversation } = state;

	switch (type) {
		case CREATING_CONVERSATION:
			return { ...state, creation: { ...creation, loading: true } };
		case CONVERSATION_CREATED:
			return {
				...state,
				creation: {
					...creation,
					loading: false,
					redirectToId: payload,
					error: false,
				},
			};
		case CONVERSATION_CREATION_FAILED:
			return {
				...state,
				creation: { ...creation, error: true, loading: false },
			};

		case FETCHING_CONVERSATION_MESSAGES:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					loading: true,
					conversationId: payload,
				},
			};
		case CONVERSATION_MESSAGES_FETCHED:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					loading: false,
					error: false,
					messages: [...payload, ...currentConversation.messages],
				},
			};
		case OTHER_USER_FETCHED:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					otherUserInfo: payload,
				},
			};
		case CONVERSATION_MEDIA_FETCHED:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					media: [...currentConversation.media, ...payload],
				},
			};
		case CONVERSATION_MESSAGES_FETCHING_FAILED:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					loading: false,
					error: true,
				},
			};
		case TEXT_CHANGED:
			return currentConversation.messageToRecycle
				? {
						...state,
						currentConversation: {
							...currentConversation,
							messageToSend: {
								...currentConversation.messageToSend,
								text: null,
							},
							messageToRecycle: {
								...currentConversation.messageToRecycle,
								text: payload,
							},
						},
				  }
				: {
						...state,
						currentConversation: {
							...currentConversation,
							messageToSend: {
								...currentConversation.messageToSend,
								text: payload,
							},
						},
				  };
		case IMAGE_ATTACHED:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					messageToSend: {
						...currentConversation.messageToSend,
						attachedImage: payload,
					},
				},
			};
		case REPLY_TO_MESSAGE_ADD:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					messageToSend: {
						...currentConversation.messageToSend,
						replyTo: payload,
					},
				},
			};
		case REPLY_TO_MESSAGE_REMOVE:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					messageToSend: {
						...currentConversation.messageToSend,
						replyTo: null,
					},
				},
			};
		case ADD_MESSAGE_TO_RECYCLE:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					messageToRecycle: currentConversation.messages[payload],
				},
			};
		case SENDING_MESSAGE:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					messageToSend: { text: '', attachedImage: null },
					messageToRecycle: null,
				},
			};
		case NEW_MESSAGE_RECEIVED:
			if (state.currentConversation.conversationId === payload.convoId) {
				return {
					...state,
					currentConversation: {
						...currentConversation,
						messages: [
							...currentConversation.messages,
							payload.newMessage,
						],
					},
				};
			}
			return state;
		case MESSAGE_RECYCLED:
		case MESSAGE_DELETED:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					messages: currentConversation.messages.map(message =>
						message.id === payload.id ? payload : message
					),
				},
			};
		case REMOVE_ATTACHED_IMAGE:
			return {
				...state,
				currentConversation: {
					...currentConversation,
					messageToSend: {
						...currentConversation.messageToSend,
						attachedImage: null,
					},
				},
			};
		case CLEAR_CURRENT_CONVERSATION_REDUCER:
			return {
				...state,
				currentConversation: initialState.currentConversation,
			};
		case CLEAN_CONVERSATION_REDUCER_STATE:
			return { ...state, creation: initialState.creation };
		default:
			return state;
	}
}
