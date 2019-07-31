import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
	container: {
		flex: 1,
		textAlign: 'center',
		fontWeight: 'bold',
		maxHeight: '100%',
		position: 'relative',
		width: '100%',
		fontSize: 20,
	},
	activityIndicator: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	noConversationContainer: {
		alignItems: 'center',
		paddingTop: '80%',
		justifyContent: 'center',
	},
	noConversationsImage: {
		width: 100,
		height: 100,
	},
	noConversationsText: {
		fontWeight: '400',
		fontSize: 15,
		color: '#8e8e8e',
		paddingTop: 20,
		paddingBottom: 15,
	},
}));
