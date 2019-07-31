import {
	SET_PHONE_NUMBER,
	SET_SECURITY_CODE,
	USER_LOGIN_SUCCESS,
	SECURITY_CODE_SENT,
	TOGGLE_LOGIN_LOADING_STATE,
	USER_SIGNUP_FAILED,
	WRONG_SECURITY_CODE,
} from './actions';

import {
	JWT_REHIDRATION_SUCCESSFUL,
	JWT_REHIDRATION_FAILED,
} from '../Auth/actions';

let initialState = {
	phoneNumber: '',
	securityCode: '',
	codeSent: null,
	loading: false,
	signupError: null,
	rehidratingJwt: true,
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case JWT_REHIDRATION_SUCCESSFUL:
			return { ...state, rehidratingJwt: false };
		case JWT_REHIDRATION_FAILED:
			return { ...state, rehidratingJwt: false };
		case SET_PHONE_NUMBER:
			return { ...state, phoneNumber: payload };
		case SET_SECURITY_CODE:
			return { ...state, securityCode: payload };
		case SECURITY_CODE_SENT:
			return { ...state, codeSent: true, signupError: null };

		case USER_SIGNUP_FAILED:
		case WRONG_SECURITY_CODE:
			return { ...state, authError: true, loading: false };

		case TOGGLE_LOGIN_LOADING_STATE:
			return { ...state, loading: !state.loading };
		case USER_LOGIN_SUCCESS:
			return initialState;
		default:
			return state;
	}
}
