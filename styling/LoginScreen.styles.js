import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		height: '100%',
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 35,
	},
	header: {
		fontSize: 25,
		textAlign: 'center',
		paddingBottom: 10,
	},
	phoneInput: {
		marginTop: 30,
		padding: 10,
		borderWidth: 2,
		borderColor: '#e6e6e6',
		borderRadius: 7,
	},
	numberInput: {
		borderWidth: 2,
		fontSize: 25,
		padding: 12,
		letterSpacing: 30,
		borderColor: '#e6e6e6',
		borderRadius: 7,
		textAlign: 'center',
	},
});
