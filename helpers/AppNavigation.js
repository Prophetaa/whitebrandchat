import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';

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
	},
	{
		initialRouteName: 'SplashScreen',
	}
);

export default createAppContainer(AppNavigator);
