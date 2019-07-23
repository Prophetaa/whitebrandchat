import { StyleSheet } from 'react-native';
import { Colors } from '../../../config';

export default (isThereConversations = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1bc4fc',
		justifyContent: 'flex-end',
	},

	//Text Area Styles
	textareaContainer: {
		width: '100%',
		flexDirection: 'row',
		padding: 9,
		alignItems: 'flex-end',
		backgroundColor: Colors.SUPER_LIGHT_GRAY,
		minHeight: 60,
		maxHeight: 200,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.51,
		shadowRadius: 13.16,
		elevation: 20,
	},
	textarea: {
		flex: 1,
		borderRadius: 30,
		padding: 15,
		paddingTop: 15,
		fontSize: 20,
		backgroundColor: Colors.WHITE,
	},
	uploadedImageContainer: {
		flex: 1,
		width: '80%',
		height: 190,
		padding: 10,
		borderRadius: 8,
		alignItems: 'flex-end',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.55,
		shadowRadius: 3.84,
		elevation: 5,
	},
	uploadedImage: {
		flex: 1,
		alignItems: 'flex-end',
		width: '100%',
		height: '100%',
	},
	clearUploadedImageIcon: {
		margin: 5,
	},
	cameraIcon: {
		marginTop: 8,
		marginBottom: 8,
		marginLeft: 6,
		marginRight: 0,
		height: 40,
		width: 40,
		resizeMode: 'stretch',
	},
	sendIcon: {
		marginTop: 8,
		marginBottom: 8,
		marginLeft: 8,
		height: 45,
		width: 45,
		resizeMode: 'stretch',
	},
	//Chat Bubbles Style
	chatBubblesContainer: {
		height: '100%',
	},
	//Bubbles Styling
	leftBubbleContainer: {
		width: '100%',
		justifyContent: 'flex-start',
		padding: 8,
	},
	rightBubbleContainer: {
		width: '100%',
		alignItems: 'flex-end',
		padding: 8,
	},
	leftBubble: {
		backgroundColor: Colors.LIGHTER_BLUE,
		padding: 13,
		maxWidth: '70%',
		borderRadius: 10,
		borderBottomLeftRadius: 0,
	},
	rightBubble: {
		backgroundColor: Colors.WHITE,
		padding: 13,
		maxWidth: '70%',
		borderRadius: 10,
		borderBottomRightRadius: 0,
	},
	bubbleText: {
		fontSize: 15,
		paddingBottom: 2,
	},
	timeAndStatusContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	bubbleTimeStamp: {
		fontSize: 12,
		color: Colors.GRAY,
	},
	messageStatus: {
		width: 13,
		marginLeft: 2,
		height: 8,
	},
}));
