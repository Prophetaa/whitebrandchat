import * as request from 'superagent';
import { baseUrl } from '../../helpers/constants';
// import { isExpired, toUserId } from '../../helpers/jwt';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const GET_USER = 'GET_USER';
export const CLEAR_USER_ERROR = 'CLEAR_USER_ERROR';

export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';
export const CREATE_SOCKET_ROOMS = 'CREATE_SOCKET_ROOMS';

export const SECURITY_CODE_SENT = 'SECURITY_CODE_SENT';
export const TOGGLE_LOGIN_LOADING_STATE = 'TOGGLE_LOGIN_LOADING_STATE';

export const securityCodeSent = () => ({
	type: SECURITY_CODE_SENT,
});

export const toggleLoginLoadingState = () => ({
	type: TOGGLE_LOGIN_LOADING_STATE,
});

export const logout = () => ({
	type: USER_LOGOUT,
});

export const signUp = () => (dispatch, getState) => {
	const state = getState();
	console.log('sasa');
	console.log(state);
	dispatch(toggleLoginLoadingState());
	request
		.post(`${baseUrl}/users`)
		.send({ phoneNumber: state.login.phoneNumber })
		.then(() => {
			dispatch(toggleLoginLoadingState());
			dispatch(securityCodeSent());
		})
		.catch(err => {
			console.log(err);
		});
};
