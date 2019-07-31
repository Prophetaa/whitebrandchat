import { StyleSheet } from 'react-native';
import { Colors } from '../../../../config';

export default (isThereConversations = StyleSheet.create({
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
		borderRadius: 8,
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
	//Reply to Bubble styles
	replyToBubbleContainer: {
		backgroundColor: Colors.SUPER_LIGHT_GRAY,
		padding: 10,
		position: 'relative',
	},
	replyToBubbleTextContainer: {
		backgroundColor: Colors.WHITE,
		padding: 10,
		maxHeight: 100,
		overflow: 'hidden',
		borderRadius: 10,
	},
	replyToBubbleNumber: {
		opacity: 0.7,
		paddingLeft: 6,
	},
	replyToBubbleText: {
		fontSize: 17,
		paddingTop: 5,
	},
	removeReplyTo: {
		position: 'absolute',
		top: 17,
		right: 17,
	},
}));
