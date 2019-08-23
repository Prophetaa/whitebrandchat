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
	mediaContainer: {
		width: '100%',
		height: 80,
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
	},
	mediaImage: {
		height: '100%',
		width: '17.5%',
		marginRight: '1.25%',
		marginLeft: '1.25%',
	},
	viewAllMediaContainer: {
		height: '100%',
		width: '20%',
		padding: 10,
		justifyContent: 'center',
	},
	viewAllMediaText: {},
});
