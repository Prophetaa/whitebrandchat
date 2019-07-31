import { StyleSheet } from 'react-native';
import { Colors } from '../../../config';

export default (styles = StyleSheet.create({
	newConvoButton: {
		position: 'absolute',
		bottom: 30,
		right: 30,
		zIndex: 10,
		shadowColor: Colors.BLACK,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 4,
	},
	convoButtonBody: {
		backgroundColor: Colors.LIGHTER_BLUE,
		width: 60,
		height: 60,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
}));
