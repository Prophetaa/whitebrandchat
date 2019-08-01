// import { AsyncStorage } from 'react-native';
import {
	CONVERSATIONS_FETCHED,
	FETCHING_CONVERSATIONS,
	FETCHING_CONVERSATIONS_ERROR,
	NEW_CONVERSATION_CREATED,
} from './actions';

let initialState = { conversations: [], fetching: false, error: false };

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case FETCHING_CONVERSATIONS:
			return { ...state, fetching: true };
		case CONVERSATIONS_FETCHED:
			return { ...state, conversations: payload, fetching: false };
		case FETCHING_CONVERSATIONS_ERROR:
			return { ...state, error: true, fetching: false };
		case NEW_CONVERSATION_CREATED:
			return { ...state, conversations: [...state.conversations, payload] };
		default:
			return state;
	}
}
