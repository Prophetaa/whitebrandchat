import { StyleSheet } from 'react-native';

export default (styles = isThereConversations =>
	StyleSheet.create({
		container: isThereConversations
			? {
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: 20,
					paddingTop: 20,
			  }
			: {
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: 20,
					paddingTop: 20,
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
			  },
		activityIndicator: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		},
		noConversationsImage: {
			width: 100,
			height: 100,
		},
		noConversationsText: {
			fontWeight: '400',
			fontSize: 20,
			color: '#8e8e8e',
			paddingTop: 10,
			paddingBottom: 20,
		},
	}));
