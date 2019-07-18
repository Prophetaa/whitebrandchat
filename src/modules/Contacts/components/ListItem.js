import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { StyleSheet } from 'react-native';

const ListItem = ({ imageSource, text, onPress }) => {
	return (
		<TouchableHighlight onPress={onPress}>
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
		borderBottomWidth: 2,
		borderBottomColor: '#c4c4c4',
	},
	image: {
		marginRight: 20,
		width: 50,
		height: 50,
		// borderRadius: 50,
	},
	text: {
		fontSize: 20,
	},
});

export default ListItem;
