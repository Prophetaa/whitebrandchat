import {
	SET_PHONE_NUMBER,
	SET_SECURITY_CODE,
	JWT_REHIDRATION_SUCCESSFUL,
	JWT_REHIDRATION_FAILED,
} from '../actions/login';
import {
	SECURITY_CODE_SENT,
	TOGGLE_LOGIN_LOADING_STATE,
	USER_LOGIN_SUCCESS,
} from '../actions/user';

let initialState = {
	phoneNumber: '',
	securityCode: '',
	codeSent: null,
	loading: false,
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
			return { ...state, codeSent: true };
		case TOGGLE_LOGIN_LOADING_STATE:
			return { ...state, loading: !state.loading };
		case USER_LOGIN_SUCCESS:
			return { ...state, loading: false };
		default:
			return state;
	}
}
