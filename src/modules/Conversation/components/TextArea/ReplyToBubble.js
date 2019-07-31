import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@ant-design/react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ReplyToBubble = ({ message, scrollToMessage, removeReplyTo }) => {
	const { text, imageSource, fromNumber } = message;
	return (
		<View style={styles.replyToBubbleContainer}>
			<TouchableOpacity
				style={styles.replyToBubbleTextContainer}
				onPress={scrollToMessage}
			>
				<View>
					<Text style={styles.replyToBubbleNumber}>{fromNumber}</Text>
					{imageSource ? (
						<Image
							style={styles.replyToBubbleImage}
							source={{ uri: imageSource }}
						/>
					) : (
						<Text style={styles.replyToBubbleText}>{text}</Text>
					)}
				</View>
			</TouchableOpacity>
			<View style={styles.removeReplyTo}>
				<TouchableOpacity onPress={removeReplyTo}>
					<Icon name='close-circle' size='md' color='black' />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ReplyToBubble;
