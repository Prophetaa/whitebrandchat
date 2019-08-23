import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const AboutBlock = ({ phoneNumber, description }) => {
	return (
		<View style={styles.aboutContainer}>
			<Text style={styles.about}>About</Text>
			<Text style={styles.aboutLargeText}>{phoneNumber}</Text>
			<Text style={styles.aboutSmallText}>Mobile</Text>
			<Text style={styles.aboutLargeText}>{description}</Text>
			<Text style={styles.aboutSmallText}>Bio</Text>
		</View>
	);
};

export default AboutBlock;
