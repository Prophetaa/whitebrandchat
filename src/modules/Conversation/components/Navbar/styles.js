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
			alignItems: 'center',
			shadowColor: Colors.BLACK,
			shadowOffset: {
				width: 0,
				height: 7,
			},
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 3,
			zIndex: 10,
		},
		navbarButtonSection: {
			alignItems: 'center',
			flexDirection: 'row',
		},
		navbarIcon: {
			width: 30,
			height: 30,
		},
		otherUserAvatar: {
			width: 40,
			height: 40,
			borderRadius: 100,
			marginRight: 15,
			marginLeft: 15,
		},
		userStatus: {
			flexDirection: 'row',
			alignItems: 'center',
		},
		onlineIcon: {
			width: 15,
			height: 15,
			marginRight: 5,
		},
	}));
