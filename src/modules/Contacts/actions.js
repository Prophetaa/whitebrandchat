
import * as request from 'superagent';

import Constants from '../../config/Constants';

export const PHONE_NUMBER_CHANGED = 'PHONE_NUMBER_CHANGED';

export const SENDING_CONTACT_INVITE = 'SENDING_CONTACT_INVITE';
export const CONTACT_INVITED_SUCCESSFULLY = 'CONTACT_INVITED_SUCCESSFULLY';

export const CONTACT_INVITE_FAILED = 'CONTACT_INVITE_FAILED';

export const setPhoneNumber = payload => ({
	type: PHONE_NUMBER_CHANGED,
	payload,
});

export const sendInvitation = () => (dispatch, getState) => {
	let state = getState();
	if (!state.currentUser) return null;
	dispatch({ type: SENDING_CONTACT_INVITE });
	let jwt = state.currentUser.jwt;

	request
		.post(`${Constants.baseUrl}/invite`)
		.set('Authorization', `Bearer ${jwt}`)
		.send({ phoneNumber: state.Contacts.invite.phoneNumber })
		.then(() => dispatch({ type: CONTACT_INVITED_SUCCESSFULLY }))
		.catch(err => {
			if (err.status === 400) {
				dispatch({
					type: CONTACT_INVITE_FAILED,
					payload: err.response.body.message,
				});
			} else {
				console.error(err);
			}
		});
};
