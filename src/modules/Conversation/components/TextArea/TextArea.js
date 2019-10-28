import React from 'react';
import {
	KeyboardAvoidingView,
	View,
	TextInput,
	Image,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { ImageAssets } from '../../../../config';
import { Icon } from '@ant-design/react-native';
import styles from './styles';
import ReplyToBubble from './ReplyToBubble';

const TextArea = ({
	onTextChange,
	Conversation,
	onSubmit,
	onCameraClick,
	uploadedImage,
	clearUploadedImage,
	removeReplyTo,
}) => {
	const { messageToSend, messageToRecycle } = Conversation.currentConversation;
	return (
		<KeyboardAvoidingView behavior='padding'>
			{messageToSend.replyTo && (
				<ReplyToBubble
					removeReplyTo={removeReplyTo}
					message={
						Conversation.currentConversation.messages[
							messageToSend.replyTo
						]
					}
				/>
			)}
			<View style={styles.textareaContainer}>
				{!uploadedImage && (
					<TextInput
						style={styles.textarea}
						value={
							messageToRecycle
								? messageToRecycle.text
								: messageToSend.text
						}
						multiline={true}
						autoCorrect={false}
						onChange={onTextChange}
						placeholder='Type something...'
					/>
				)}
				{uploadedImage && (
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
				{messageToSend.text === '' && !uploadedImage && (
					<TouchableOpacity onPress={onCameraClick}>
						<Image
							style={styles.cameraIcon}
							source={ImageAssets.GALLERY_ICON}
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

const mapStateToProps = state => ({
	Conversation: state.Conversation,
	currentUserId: state.currentUser.id,
});

export default connect(
	mapStateToProps,
	null
)(TextArea);
