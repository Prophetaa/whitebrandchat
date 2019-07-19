import Constants from '../../config/Constants';

export const PHONE_NUMBER_CHANGED = 'PHONE_NUMBER_CHANGED';

export const SENDING_CONTACT_INVITE = 'SENDING_CONTACT_INVITE';
export const CONTACT_INVITED_SUCCESSFULLY = 'CONTACT_INVITED_SUCCESSFULLY';

export const sendInvitation = phoneNumber => async (dispatch, getState) => {
	let state = getState();
	if (!state.currentUser) return null;
	dispatch({ type: SENDING_CONTACT_INVITE });
	let jwt = state.currentUser.jwt;

	request
		.post(`${Constants.baseUrl}/invite`)
		.set('Authorization', `Bearer ${jwt}`)
		.send({ phoneNumber })
		.then(() => dispatch({ type: CONTACT_INVITED_SUCCESSFULLY }))
		.catch(err => console.log(err));
};
