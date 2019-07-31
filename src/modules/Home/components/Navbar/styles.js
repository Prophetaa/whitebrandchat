import { StyleSheet } from 'react-native';
import { Colors } from '../../../config';

export default (styles = statusBarHeight =>
	StyleSheet.create({
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
			borderBottomWidth: 2,
			borderBottomColor: Colors.SUPER_LIGHT_GRAY,
		},
		navbarButtonSection: {},
		navbarIcon: {
			width: 30,
			height: 30,
		},
	}));
