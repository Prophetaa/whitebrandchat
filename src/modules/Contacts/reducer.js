// import { AsyncStorage } from 'react-native';
import {
	PHONE_NUMBER_CHANGED,
	SENDING_CONTACT_INVITE,
	CONTACT_INVITED_SUCCESSFULLY,
} from './actions';

let initialState = {
	contacts: null,
	invite: {
		sent: false,
		loading: false,
		phoneNumber: '',
	},
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case PHONE_NUMBER_CHANGED:
			return { ...state, invite: { phoneNumber: payload.phoneNumber } };

		case SENDING_CONTACT_INVITE:
			return { ...state, invite: { loading: true } };
		case CONTACT_INVITED_SUCCESSFULLY:
			return {
				...state,
				invite: { loading: false, sent: true, phoneNumber: '' },
			};
		default:
			return state;
	}
}
