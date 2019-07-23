import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import { View, Image } from 'react-native';
import {
	onTextChange,
	fetchConversationMessages,
	sendMessage,
	clearCurrentConversationReducer,
	attachImage,
	clearUploadedImage,
} from '../actions';
import TextArea from './TextArea';
import ChatBubbleContainer from './ChatBubbleContainer';
import * as Permissions from 'expo-permissions';

class ConversationScreen extends React.Component {
	state = { uploadedImage: null };

	componentWillMount() {
		const { navigation, fetchConversationMessages } = this.props;
		const conversationId = navigation.getParam('conversationId', 0);
		fetchConversationMessages(conversationId);
	}

	uploadImage = async () => {
		const { status } = await Permissions.askAsync(
			Permissions.CAMERA,
			Permissions.CAMERA_ROLL
		);

		if (status !== 'granted') {
			await Permissions.askAsync(
				Permissions.CAMERA,
				Permissions.CAMERA_ROLL
			);
		} else {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: 'Images',
				allowsEditing: false,
				base64: true,
			});

			if (result.cancelled) {
				return;
			}

			const uri = result.uri;
			const uriParts = uri.split('.');
			const imageType = uriParts[uriParts.length - 1];
			const formData = new FormData();
			formData.append('photo', {
				uri: result.base64,
				name: `photo.${imageType}`,
				type: `image/${imageType}`,
			});
			this.setState({
				uploadedImage: {
					uri: `data:image/${imageType};base64,${result.base64}`,
				},
			});

			this.props.attachImage(formData);
		}
	};

	sendMessageAndClearState = () => {
		this.props.sendMessage();
		this.setState({ uploadededImage: null });
	};

	clearUploadedImage = () => {
		this.setState({ uploadedImage: null });
		this.props.clearUploadedImage();
	};

	componentWillUnmount() {
		this.props.clearCurrentConversationReducer();
	}

	render() {
		const { onTextChange, Conversation, currentUser } = this.props;
		const { uploadedImage } = this.state;
		return (
			<View style={styles.container}>
				<ChatBubbleContainer
					conversation={Conversation.currentConversation}
					currentUser={currentUser}
				/>
				<TextArea
					onTextChange={onTextChange}
					Conversation={Conversation}
					onSubmit={this.sendMessageAndClearState}
					onCameraClick={this.uploadImage}
					uploadedImage={uploadedImage}
					clearUploadedImage={this.clearUploadedImage}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	Conversation: state.Conversation,
});

const mapDispatchToProps = {
	onTextChange,
	fetchConversationMessages,
	attachImage,
	sendMessage,
	clearCurrentConversationReducer,
	clearUploadedImage,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConversationScreen);
