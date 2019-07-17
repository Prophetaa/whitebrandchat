import * as request from 'superagent';
import { baseUrl, localStorageJwtKey } from '../../helpers/constants';
import { AsyncStorage } from 'react-native';
import { toggleLoginLoadingState, USER_LOGIN_SUCCESS } from './user';

export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_SECURITY_CODE = 'SET_SECURITY_CODE';
export const JWT_REHIDRATION_SUCCESSFUL = 'JWT_REHIDRATION_SUCCESSFUL';
export const JWT_REHIDRATION_FAILED = 'JWT_REHIDRATION_FAILED';

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

export const rehidrateJWT = () => async dispatch => {
	AsyncStorage.getItem(localStorageJwtKey)
		.then(res =>
			dispatch({
				type: JWT_REHIDRATION_SUCCESSFUL,
				payload: JSON.parse(res),
			})
		)
		.catch(err => {
			console.log(err);
			dispatch({ type: JWT_REHIDRATION_FAILED });
		});
};

export const login = () => (dispatch, getState) => {
	const state = getState();
	request
		.post(`${baseUrl}/login`)
		.send({
			phoneNumber: state.login.phoneNumber,
			securityCode: state.login.securityCode,
		})
		.then(res => {
			dispatch(userLoginSuccess(res.body));
			console.log('RESPONSE', res.body);
		})
		.catch(err => {
			console.log(err);
		});
};
