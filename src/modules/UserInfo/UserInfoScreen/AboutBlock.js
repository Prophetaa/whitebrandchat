import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const AboutBlock = ({ phoneNumber, description }) => {
	return (
		<View style={styles.aboutContainer}>
			<Text>About</Text>
			<Text>{phoneNumber}</Text>
			<Text>Mobile</Text>
			<Text>{description}</Text>
			<Text>Bio</Text>
		</View>
	);
};

export default AboutBlock;
