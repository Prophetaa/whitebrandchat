import { AsyncStorage } from 'react-native';
import Constants from '../../config/Constants';
import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../Login/actions';
import { JWT_REHIDRATION_SUCCESSFUL } from './actions';

let initialState = null;

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case JWT_REHIDRATION_SUCCESSFUL:
			return payload;
		case USER_LOGIN_SUCCESS: {
			AsyncStorage.setItem(
				Constants.localStorageJwtKey,
				JSON.stringify(payload)
			);
			return payload;
		}
		case USER_LOGOUT: {
			AsyncStorage.removeItem(Constants.localStorageJwtKey);
			return null;
		}
		default:
			return state;
	}
}
