import * as request from 'superagent';
import Constants from '../../config/Constants';

export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_SECURITY_CODE = 'SET_SECURITY_CODE';
export const SECURITY_CODE_SENT = 'SECURITY_CODE_SENT';
export const WRONG_SECURITY_CODE = 'WRONG_SECURITY_CODE';

export const TOGGLE_LOGIN_LOADING_STATE = 'TOGGLE_LOGIN_LOADING_STATE';
export const CLEAR_USER_ERROR = 'CLEAR_USER_ERROR';

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGOUT = 'USER_LOGOUT';

export const handlePhoneChange = payload => ({
	type: SET_PHONE_NUMBER,
	payload,
});

export const handleSecurityCodeChange = payload => ({
	type: SET_SECURITY_CODE,
	payload,
});

const userLoginSuccess = payload => ({
	type: USER_LOGIN_SUCCESS,
	payload,
});

export const logout = () => ({
	type: USER_LOGOUT,
});

export const securityCodeSent = payload => ({
	type: SECURITY_CODE_SENT,
	payload,
});

export const toggleLoginLoadingState = () => ({
	type: TOGGLE_LOGIN_LOADING_STATE,
});

export const signUp = () => (dispatch, getState) => {
	const state = getState();
	dispatch(toggleLoginLoadingState());

	request
		.post(`${Constants.baseUrl}/users`)
		.send({ phoneNumber: state.login.phoneNumber })
		.then(res => dispatch(securityCodeSent(res.text)))
		.catch(err => {
			dispatch({ type: USER_SIGNUP_FAILED, payload: err.status });
		});
};

export const login = () => async (dispatch, getState) => {
	const state = getState();
	dispatch(toggleLoginLoadingState());
	request
		.post(`${Constants.baseUrl}/login`)
		.send({
			phoneNumber: state.login.phoneNumber,
			securityCode: state.login.securityCode,
		})
		.then(res => {
			dispatch(userLoginSuccess(res.body));
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: WRONG_SECURITY_CODE });
		});
};
