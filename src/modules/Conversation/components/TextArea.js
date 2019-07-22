import React from 'react';
import { KeyboardAvoidingView, View, TextInput, Image } from 'react-native';
import { ImageAssets } from '../../../config';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const TextArea = ({ onTextChange, Conversation, onSubmit }) => {
	const text = Conversation.currentConversation.messageToSend.text;

	return (
		<KeyboardAvoidingView behavior='position' enabled>
			<View style={styles.textareaContainer}>
				<TextInput
					style={styles.textarea}
					value={text}
					multiline={true}
					onChange={onTextChange}
				/>
				{text === '' && (
					<Image
						style={styles.cameraIcon}
						source={ImageAssets.CAMERA_ICON}
					/>
				)}
				<TouchableWithoutFeedback onPress={onSubmit}>
					<Image style={styles.sendIcon} source={ImageAssets.SEND_ICON} />
				</TouchableWithoutFeedback>
			</View>
		</KeyboardAvoidingView>
	);
};

export default TextArea;
