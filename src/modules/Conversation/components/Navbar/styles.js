import { StyleSheet } from 'react-native';
import { Colors } from '../../../../config';

export default (styles = statusBarHeight =>
	StyleSheet.create({
		iosNavbarContainer: {
			position: 'absolute',
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: statusBarHeight,
			width: '100%',
			height: statusBarHeight + 55,
			top: 0,
			backgroundColor: Colors.DARK_BLUE,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
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
		androidNavbarContainer: {
			position: 'absolute',
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: statusBarHeight,
			width: '100%',
			height: statusBarHeight + 55,
			top: 0,
			backgroundColor: Colors.DARK_BLUE,
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
		backChevron: {
			padding: 4,
		},
		backArrow: {
			padding: 10,
		},
		backChevronText: {
			paddingLeft: 10,
			fontSize: 20,
			color: Colors.WHITE,
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
		iosAvatar: {
			width: 40,
			height: 40,
		},
		whiteText: {
			color: Colors.WHITE,
		},
	}));
