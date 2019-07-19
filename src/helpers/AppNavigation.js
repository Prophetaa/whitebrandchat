import { createStackNavigator, createAppContainer } from 'react-navigation';
<<<<<<< HEAD:src/helpers/AppNavigation.js
import { HomeScreen } from '../modules/Home';
import { LoginScreen } from '../modules/Login';
import { SplashScreen } from '../modules/Splash';
import { ContactsScreen } from '../modules/Contacts';
=======
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import ContactsScreenStyles from '../styling/ContactsScreen.styles';
import ContactsScreen from '../screens/ContactsScreen';
>>>>>>> master:helpers/AppNavigation.js

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
