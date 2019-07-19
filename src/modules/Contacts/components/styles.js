import { StyleSheet } from 'react-native';
import Colors from '../../../config/Colors';

export default StyleSheet.create({
	container: {
		minHeight: '100%',
	},
	item: {
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: 'red',
	},
	itemImage: {
		width: 50,
		height: 50,
	},
	modalBody: {
		paddingTop: 30,
		alignItems: 'center',
	},
	modalImage: {
		width: 70,
		height: 70,
	},
	modalText: {
		fontSize: 15,
		color: '#8e8e8e',
		paddingTop: 20,
	},
	phoneInput: {
		marginTop: 20,
		marginBottom: 20,
		padding: 10,
		fontSize: 20,
		borderWidth: 2,
		borderColor: '#e6e6e6',
		borderRadius: 7,
	},
	phoneInputError: {
		marginTop: 20,
		marginBottom: 20,
		padding: 10,
		fontSize: 20,
		borderWidth: 2,
		borderColor: Colors.RED,
		borderRadius: 7,
	},
	errorMessage: {
		fontSize: 12,
		color: Colors.RED,
		paddingTop: 10,
	},
});
