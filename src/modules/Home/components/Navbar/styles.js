import { StyleSheet } from 'react-native';
import { Colors } from '../../../../config';

export default styles = statusBarHeight =>
	StyleSheet.create({
		iosNavContainer: {
			position: 'absolute',
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: statusBarHeight,
			width: '100%',
			height: statusBarHeight + 55,
			top: 0,
			backgroundColor: Colors.DARK_BLUE,
			flexDirection: 'row',
			justifyContent: 'flex-end',
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
		androidNavContainer: {
			position: 'absolute',
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: statusBarHeight,
			width: '100%',
			height: statusBarHeight + 55,
			top: 0,
			backgroundColor: Colors.DARK_BLUE,
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
		navbarButtonSection: {
			minWidth: '10%',
		},
		navbarIcon: {
			width: 30,
			height: 30,
		},
		iosHeader: {
			position: 'absolute',
			bottom: 15,
			left: 0,
			right: 0,
			color: Colors.WHITE,
			fontSize: 20,
			textAlign: 'center',
		},
		androidHeader: {
			color: Colors.WHITE,
			fontSize: 20,
		},
	});
