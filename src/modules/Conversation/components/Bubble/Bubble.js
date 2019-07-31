import React from 'react';
import { Text, View, Image } from 'react-native';
import { ImageAssets } from '../../../../config';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChatBubble = ({
	message,
	id,
	onBubblePress,
	messageIndex,
	replyToMessage,
	scrollToMessage,
}) => {
	const { createdAt, from, text, attachedImage, replyTo } = message;
	const isTextmessageMine = from === id;
	const timeStamp = new Date(createdAt * 1000);
	return (
		<View
			style={
				isTextmessageMine
					? styles.rightBubbleContainer
					: styles.leftBubbleContainer
			}
		>
			<TouchableOpacity
				onLongPress={() => onBubblePress(message, messageIndex)}
				style={isTextmessageMine ? styles.rightBubble : styles.leftBubble}
			>
				<View>
					{replyToMessage && (
						<TouchableOpacity
							style={styles.replyToMessage}
							onPress={() => scrollToMessage(replyTo - 1)}
						>
							<View style={styles.replyToContainer}>
								<Text style={styles.replyToPhoneNumber}>
									Reply from: {replyToMessage.fromNumber}
								</Text>
								{replyToMessage.attachedImage ? (
									<Image
										source={{ uri: replyToMessage.attachedImage }}
									/>
								) : (
									<Text style={styles.replyToText}>
										{replyToMessage.text}
									</Text>
								)}
							</View>
						</TouchableOpacity>
					)}
					<Text
						style={
							message.text !== 'This message was deleted'
								? styles.bubbleText
								: styles.bubbleTextDeleted
						}
					>
						{text}
					</Text>
					{attachedImage && (
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
									message.createdAt !== null &&
									ImageAssets.MESSAGE_UNREAD
								}
							/>
						)}
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ChatBubble;
