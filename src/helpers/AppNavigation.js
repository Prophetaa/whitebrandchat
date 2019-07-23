import { createStackNavigator, createAppContainer } from 'react-navigation';

import { HomeScreen } from '../modules/Home';
import { LoginScreen } from '../modules/Login';
import { SplashScreen } from '../modules/Splash';
import { ContactsScreen } from '../modules/Contacts';

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
	},
	{
		initialRouteName: 'SplashScreen',
	}
);

export default createAppContainer(AppNavigator);
