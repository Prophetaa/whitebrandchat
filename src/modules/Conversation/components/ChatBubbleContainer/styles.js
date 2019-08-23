import { StyleSheet } from 'react-native';
import { Colors } from '../../../../config';

export default (styles = statusBarHeight =>
	StyleSheet.create({
		chatBubblesContainer: {
			maxHeight: '100%',
			backgroundColor: Colors.WHITE,
			paddingTop: statusBarHeight + 55,
		},
	}));
