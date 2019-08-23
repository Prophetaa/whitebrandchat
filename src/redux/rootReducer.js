import { combineReducers } from 'redux';
import currentUser from '../modules/Auth/reducer';
import login from '../modules/Login/reducer';
import myConversations from '../modules/Home/reducer';
import Contacts from '../modules/Contacts/reducer';
import Conversation from '../modules/Conversation/reducer';
import Common from '../modules/Common/reducer';

export default combineReducers({
	currentUser,
	Common,
	login,
	myConversations,
	Contacts,
	Conversation,
});
