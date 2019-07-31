import { combineReducers } from 'redux';
import currentUser from '../modules/Auth/reducer';
import login from '../modules/Login/reducer';
import myConversations from '../modules/Home/reducer';
import Contacts from '../modules/Contacts/reducer';
import Conversation from '../modules/Conversation/reducer';

export default combineReducers({
	currentUser,
	login,
	myConversations,
	Contacts,
	Conversation,
});
