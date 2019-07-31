import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { ImageAssets } from '../../../config';
import styles from './styles';
import Bubble from './Bubble';

const TextArea = ({ conversation, currentUser }) => {
	return (
		<ScrollView style={styles.chatBubblesContainer}>
			{conversation.messages.length > 0 &&
				conversation.messages.map(message => (
					<Bubble key={message.id} message={message} id={currentUser.id} />
				))}
		</ScrollView>
	);
};

export default TextArea;
