import React from 'react';
import { Text, View, Image } from 'react-native';
import { ImageAssets } from '../../../config';
import styles from './styles';

const ChatBubble = ({ message, id }) => {
	const isTextmessageMine = message.from === id;
	const timeStamp = new Date(message.createdAt * 1000);
	return (
		<View
			style={
				isTextmessageMine
					? styles.rightBubbleContainer
					: styles.leftBubbleContainer
			}
		>
			<View
				style={isTextmessageMine ? styles.rightBubble : styles.leftBubble}
			>
				<Text style={styles.bubbleText}>{message.text}</Text>
				{message.attachedImage && (
					<Image
						style={styles.bubleAttachedImage}
						source={{ uri: message.attachedImage }}
					/>
				)}
				<View style={styles.timeAndStatusContainer}>
					<Text style={styles.bubbleTimeStamp}>
						{`${timeStamp.getHours()}:${timeStamp.getMinutes()}`}
					</Text>
					{isTextmessageMine && (
						<Image
							style={styles.messageStatus}
							source={
								message.createdAt !== null && ImageAssets.MESSAGE_UNREAD
							}
						/>
					)}
				</View>
			</View>
		</View>
	);
};

export default ChatBubble;
