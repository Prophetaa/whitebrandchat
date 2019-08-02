import { StyleSheet } from 'react-native';
import { Colors } from '../../../../config';

export default (styles = statusBarHeight =>
	StyleSheet.create({
		navbarContainer: {
			position: 'absolute',
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: statusBarHeight,
			width: '100%',
			height: statusBarHeight + 55,
			top: 0,
			backgroundColor: Colors.SUPER_LIGHT_BLUE,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			shadowColor: Colors.BLACK,
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 0.1,
			shadowRadius: 3,
			elevation: 3,
			zIndex: 10,
		},
		navbarButtonSection: {},
		navbarIcon: {
			width: 30,
			height: 30,
		},
	}));
