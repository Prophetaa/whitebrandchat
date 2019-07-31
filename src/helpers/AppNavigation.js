import { createStackNavigator, createAppContainer } from 'react-navigation';

import { HomeScreen } from '../modules/Home';
import { LoginScreen } from '../modules/Login';
import { SplashScreen } from '../modules/Splash';
import { ContactsScreen } from '../modules/Contacts';
import { ConversationScreen } from '../modules/Conversation';

const AppNavigator = createStackNavigator(
	{
		SplashScreen: {
			screen: SplashScreen,
			navigationOptions: {
				header: null,
			},
		},
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null,
			},
		},
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				header: null,
			},
		},
		Contacts: {
			screen: ContactsScreen,
		},
		Conversation: {
			screen: ConversationScreen,
		},
	},
	{
		initialRouteName: 'SplashScreen',
	}
);

export default createAppContainer(AppNavigator);
