import { StyleSheet } from 'react-native';
import Colors from '../../../config/Colors';

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
	stepWrapper: {
		width: '100%',
	},
	image: {
		width: 150,
		height: 150,
		marginBottom: 30,
		alignSelf: 'center',
	},
	phoneInput: {
		marginTop: 30,
		padding: 10,
		borderWidth: 2,
		borderColor: '#e6e6e6',
		borderRadius: 7,
	},
	codeInput: {
		marginTop: 30,
		borderWidth: 2,
		fontSize: 25,
		padding: 12,
		letterSpacing: 30,
		borderColor: '#e6e6e6',
		borderRadius: 7,
		textAlign: 'center',
	},
	codeInputError: {
		marginTop: 30,
		borderWidth: 2,
		fontSize: 25,
		padding: 12,
		letterSpacing: 30,
		borderColor: Colors.RED,
		borderRadius: 7,
		textAlign: 'center',
	},
	didntReceiveText: {
		paddingTop: 20,
		textAlign: 'center',
	},
	clickHere: {
		color: '#2998BD',
		textDecorationLine: 'underline',
	},
});
