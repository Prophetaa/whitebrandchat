import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#84DBFF',
	},
	image: {
		width: 150,
		height: 150,
		shadowColor: '#202020',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 5,
	},
	text: {
		fontSize: 25,
		paddingTop: 20,
		fontWeight: '700',
		color: '#ffffff',
	},
});
