import React from 'react';
import {
	KeyboardAvoidingView,
	View,
	Text,
	TextInput,
	Image,
	ImageBackground,
} from 'react-native';
import { ImageAssets } from '../../../config';
import { Icon } from '@ant-design/react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TextArea = ({
	onTextChange,
	Conversation,
	onSubmit,
	onCameraClick,
	uploadedImage,
	clearUploadedImage,
}) => {
	const text = Conversation.currentConversation.messageToSend.text;

	return (
		<KeyboardAvoidingView behavior='position' enabled>
			<View style={styles.textareaContainer}>
				{!uploadedImage ? (
					<TextInput
						style={styles.textarea}
						value={text}
						multiline={true}
						autoCorrect={false}
						onChange={onTextChange}
					/>
				) : (
					<View style={styles.uploadedImageContainer}>
						<ImageBackground
							style={styles.uploadedImage}
							source={uploadedImage}
						>
							<TouchableOpacity
								style={styles.clearUploadedImageIcon}
								onPress={clearUploadedImage}
							>
								<Icon name='close-circle' size='lg' color='#fff' />
							</TouchableOpacity>
						</ImageBackground>
					</View>
				)}
				{text === '' && !uploadedImage && (
					<TouchableOpacity onPress={onCameraClick}>
						<Image
							style={styles.cameraIcon}
							source={ImageAssets.CAMERA_ICON}
						/>
					</TouchableOpacity>
				)}
				<TouchableOpacity onPress={onSubmit}>
					<Image style={styles.sendIcon} source={ImageAssets.SEND_ICON} />
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default TextArea;
