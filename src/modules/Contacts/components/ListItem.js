import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '../../../config';

const ListItem = ({ imageSource, text, onPress, onLongPress }) => {
	return (
		<TouchableHighlight onPress={onPress} onLongPress={onLongPress}>
			<View style={styles.container}>
				<Image style={styles.image} source={imageSource} />
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		width: '100%',
		borderBottomWidth: 1,
		borderBottomColor: Colors.LIGHT_GRAY,
	},
	image: {
		marginRight: 20,
		width: 50,
		height: 50,
		borderRadius: 23,
	},
	text: {
		fontSize: 20,
	},
});

export default ListItem;
