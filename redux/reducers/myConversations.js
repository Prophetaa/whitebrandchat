import { AsyncStorage } from 'react-native';
import {
	CONVERSATIONS_FETCHED,
	FETCHING_CONVERSATIONS,
} from '../actions/conversations';

let initialState = { conversations: [], fetching: false, error: false };

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case FETCHING_CONVERSATIONS:
			return { ...state, fetching: true };
		case CONVERSATIONS_FETCHED:
			return { ...state, conversations: payload, fetching: false };
		default:
			return state;
	}
}
