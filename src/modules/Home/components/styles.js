import { StyleSheet } from 'react-native';
import { Colors } from '../../../config';

export default (styles = statusBarHeight =>
	StyleSheet.create({
		container: {
			flex: 1,
			textAlign: 'center',
			fontWeight: 'bold',
			height: '100%',
			width: '100%',
			fontSize: 20,
		},
		activityIndicator: {
			alignItems: 'center',
			justifyContent: 'center',
		},
		noConversationContainer: {
			alignItems: 'center',
			paddingTop: '80%',
			justifyContent: 'center',
		},
		noConversationsImage: {
			width: 100,
			height: 100,
		},
		noConversationsText: {
			fontWeight: '400',
			fontSize: 15,
			color: '#8e8e8e',
			paddingTop: 20,
			paddingBottom: 15,
		},
		// NAVBAR STYLES
		navbarContainer: {
			paddingLeft: 10,
			paddingRight: 10,
			width: '100%',
			justifyContent: 'space-between',
			height: 55,
			top: statusBarHeight,
			marginBottom: statusBarHeight,
			backgroundColor: Colors.WHITE,
			flexDirection: 'row',
			alignItems: 'center',
			shadowColor: Colors.BLACK,
			shadowOffset: {
				width: 0,
				height: 7,
			},
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 3,
		},
		navbarButtonSection: {},
		navbarIcon: {
			width: 30,
			height: 30,
		},
	}));
