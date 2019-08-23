import { StyleSheet } from 'react-native';
import { Colors } from '../../../config';

export default StyleSheet.create({
	userImageContainer: {
		position: 'relative',
		width: '100%',
		height: 250,
	},
	userImage: {
		width: '100%',
		height: '100%',
	},
	userInfoContainer: {
		position: 'absolute',
		bottom: 10,
		left: 10,
	},
	userName: {
		color: Colors.WHITE,
		fontSize: 25,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	userStatus: {
		color: Colors.WHITE,
		fontSize: 13,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	containerPadding: {
		padding: 15,
	},
	about: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.DARK_BLUE,
		paddingTop: 10,
		paddingBottom: 15,
	},
	aboutLargeText: {
		fontSize: 15,
	},
	aboutSmallText: {
		fontSize: 13,
		color: Colors.GRAY,
		paddingTop: 2,
		paddingBottom: 15,
	},
	notificationBlockContainer: {
		paddingTop: 5,
		paddingBottom: 5,
	},
	toggleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	mediaContainer: {
		width: '100%',
		backgroundColor: Colors.WHITE,
		shadowColor: Colors.BLACK,
		borderWidth: 1.5,
		borderColor: Colors.LIGHT_GRAY,
		paddingTop: '2%',
		paddingBottom: 10,
	},
	mediaHeaderContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: '2%',
		paddingRight: '2%',
		paddingBottom: '2%',
	},
	mediaHeaderText: {
		fontSize: 15,
		color: Colors.GRAY,
	},
	mediaImagesContainer: {
		width: '100%',
		height: 70,
		flexDirection: 'row',
		padding: '1%',
		paddingTop: 0,
	},
	mediaImage: {
		height: '100%',
		width: '18%',
		marginRight: '1%',
		marginLeft: '1%',
	},
	viewAllMediaContainer: {
		height: '100%',
		width: '18%',
		marginRight: '1%',
		marginLeft: '1%',
		padding: 10,
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: Colors.LIGHT_GRAY,
	},
	viewAllMediaText: {
		textAlign: 'center',
	},
});
