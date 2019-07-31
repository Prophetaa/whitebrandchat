import Constants from '../../config/Constants';
import { AsyncStorage } from 'react-native';
export const JWT_REHIDRATION_SUCCESSFUL = 'JWT_REHIDRATION_SUCCESSFUL';
export const JWT_REHIDRATION_FAILED = 'JWT_REHIDRATION_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';

export const logout = () => ({
	type: USER_LOGOUT,
});

export const rehidrateJWT = () => async dispatch => {
	const localStoredJwt = await AsyncStorage.getItem(
		Constants.localStorageJwtKey
	);
	if (localStoredJwt) {
		return dispatch({
			type: JWT_REHIDRATION_SUCCESSFUL,
			payload: JSON.parse(localStoredJwt),
		});
	}
	dispatch({
		type: JWT_REHIDRATION_FAILED,
	});
	return null;
};
