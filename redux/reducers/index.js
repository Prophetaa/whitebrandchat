import { combineReducers } from 'redux';
import currentUser from './currentUser';
import login from './login';
import myConversations from './myConversations';

export default combineReducers({
	currentUser,
	login,
	myConversations,
});
