// import * as request from 'superagent';
import Constants from '../../config/Constants';
import { AsyncStorage } from 'react-native';

export const JWT_REHIDRATION_SUCCESSFUL = 'JWT_REHIDRATION_SUCCESSFUL';
export const JWT_REHIDRATION_FAILED = 'JWT_REHIDRATION_FAILED';

export const rehidrateJWT = () => async dispatch => {
	AsyncStorage.getItem(Constants.localStorageJwtKey)
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
