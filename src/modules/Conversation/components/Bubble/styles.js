import { StyleSheet } from 'react-native';
import { Colors } from '../../../../config';

export default (isThereConversations = StyleSheet.create({
	leftBubbleContainer: {
		width: '100%',
		alignItems: 'flex-start',
		padding: 8,
	},
	rightBubbleContainer: {
		width: '100%',
		alignItems: 'flex-end',
		padding: 8,
	},
	leftBubble: {
		backgroundColor: Colors.SUPER_LIGHT_GRAY,
		padding: 10,
		minWidth: '25%',
		maxWidth: '70%',
		borderRadius: 10,
		borderBottomLeftRadius: 0,
	},
	rightBubble: {
		backgroundColor: Colors.SUPER_LIGHT_BLUE,
		padding: 10,
		minWidth: '25%',
		maxWidth: '70%',
		borderRadius: 10,
		borderBottomRightRadius: 0,
	},
	bubbleText: {
		fontSize: 15,
		paddingBottom: 2,
	},
	bubbleTextDeleted: {
		fontSize: 15,
		paddingBottom: 2,
		color: Colors.GRAY,
	},
	bubleAttachedImage: {
		width: 230,
		height: 200,
	},
	timeAndStatusContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	bubbleTimeStamp: {
		fontSize: 12,
		paddingTop: 10,
		color: Colors.GRAY,
	},
	messageStatus: {
		width: 13,
		marginLeft: 2,
		marginTop: 2,
		height: 8,
	},
	replyToMessage: {
		paddingBottom: 10,
	},
	replyToContainer: {
		padding: 10,
		backgroundColor: Colors.WHITE,
		borderRadius: 7,
	},
	replyToPhoneNumber: {
		fontSize: 12,
		paddingLeft: 3,
		opacity: 0.7,
	},
	replyToText: {
		paddingTop: 8,
	},
}));
