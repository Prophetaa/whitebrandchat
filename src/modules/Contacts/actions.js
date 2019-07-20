import * as request from 'superagent';

import Constants from '../../config/Constants';

export const PHONE_NUMBER_CHANGED = 'PHONE_NUMBER_CHANGED';

export const SENDING_CONTACT_INVITE = 'SENDING_CONTACT_INVITE';
export const CONTACT_INVITED_SUCCESSFULLY = 'CONTACT_INVITED_SUCCESSFULLY';
export const CONTACT_INVITE_FAILED = 'CONTACT_INVITE_FAILED';

export const CHECKING_CONTACTS_REGISTRATION = 'CHECKING_CONTACTS_REGISTRATION';
export const CONTACTS_CHECK_SUCCESS = 'CONTACTS_CHECK_SUCCESS';
export const CONTACTS_CHECK_FAILED = 'CONTACTS_CHECK_FAILED';

export const setPhoneNumber = payload => ({
	type: PHONE_NUMBER_CHANGED,
	payload,
});

export const checkIfContactsAreRegistered = data => async (
	dispatch,
	getState
) => {
	let state = getState();
	let jwt = state.currentUser.jwt;
	dispatch({ type: CHECKING_CONTACTS_REGISTRATION });

	const extractedNumbers = await data
		.reduce(
			(result, { phoneNumbers }) =>
				phoneNumbers ? [...result, ...phoneNumbers] : result,
			[]
		)
		.reduce(
			(result, { label, number }) =>
				label === 'mobile' ? [...result, number] : result,
			[]
		);

	const formatedNumbers = await extractedNumbers.map(number =>
		number.replace(/[\W_]+/g, '')
	);

	const formatedNumbersWithPrefix = await formatedNumbers.map(
		number =>
			`+${
				number.substring(0, 2) === '00'
					? number.replace(/^.{2}/g, '')
					: number
			}`
	);

	//TODO: Add contact name to the Number, to display in the list

	request
		.post(`${Constants.baseUrl}/check-contacts`)
		.set('Authorization', `Bearer ${jwt}`)
		.send({ numbers: formatedNumbersWithPrefix })
		.then(async res =>
			dispatch({ type: CONTACTS_CHECK_SUCCESS, payload: res.body })
		)
		.catch(err => {
			console.log(err);
			dispatch({ type: CONTACTS_CHECK_FAILED });
		});
};

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
