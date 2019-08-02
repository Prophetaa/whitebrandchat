import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import { Modal } from '@ant-design/react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View } from 'react-native';
import {
	onTextChange,
	fetchConversationMessages,
	sendMessage,
	deleteMessage,
	clearCurrentConversationReducer,
	attachImage,
	clearUploadedImage,
	replyToMessage,
	removeReplyTo,
	recycleMessage,
	fetchOtherUserInfo,
} from '../../actions';
import TextArea from '../TextArea/TextArea';
import ChatBubbleContainer from '../ChatBubbleContainer/ChatBubbleContainer';
import * as Permissions from 'expo-permissions';
import IOSNavbar from '../Navbar/IOSNavbar';
import AndroidNavbar from '../Navbar/AndroidNavbar';

class ConversationScreen extends React.Component {
	state = { uploadedImage: null, conversationIndex: null };

	componentWillMount() {
		const {
			navigation,
			fetchConversationMessages,
			fetchOtherUserInfo,
		} = this.props;
		const conversationId = navigation.getParam('conversationId', 0);
		this.setState({
			conversationIndex: navigation.getParam('conversationIndex', null),
		});
		fetchConversationMessages(conversationId);
		fetchOtherUserInfo(conversationId);
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

			this.setState({
				uploadedImage: {
					uri,
				},
			});

			this.props.attachImage(result.base64);
			return;
		}
	};

	onBubblePress = (message, messageIndex) => {
		message.from === this.props.currentUser.id
			? Modal.operation([
					{
						text: 'Reply message',
						onPress: () => this.props.replyToMessage(messageIndex),
					},
					{
						text: 'Recycle message',
						onPress: () => {
							!message.isDeleted &&
								!message.isRecycled &&
								this.props.recycleMessage(messageIndex);
						},
					},
					{
						text: 'Delete message',
						onPress: () => {
							!message.isDeleted &&
								this.props.deleteMessage(message.id, messageIndex);
						},
					},
			  ])
			: Modal.operation([
					{
						text: 'Reply message',
						onPress: () => this.props.replyToMessage(messageIndex),
					},
			  ]);
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
		const { onTextChange, navigation, Common } = this.props;
		const { uploadedImage } = this.state;
		return (
			<>
				{Common.platform === 'ios' ? (
					<IOSNavbar
						statusBarHeight={Common.statusBarHeight}
						onLeftPress={() => navigation.goBack()}
					/>
				) : (
					<AndroidNavbar
						statusBarHeight={Common.statusBarHeight}
						onLeftPress={() => navigation.goBack()}
					/>
				)}
				<View style={styles.container}>
					<ChatBubbleContainer
						onBubblePress={this.onBubblePress}
						statusBarHeight={Common.statusBarHeight}
					/>
					<TextArea
						onTextChange={onTextChange}
						onSubmit={this.sendMessageAndClearState}
						onCameraClick={this.uploadImage}
						uploadedImage={uploadedImage}
						clearUploadedImage={this.clearUploadedImage}
						removeReplyTo={() => this.props.removeReplyTo()}
					/>
				</View>
			</>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	Common: state.Common,
	conversations: state.myConversations.conversations,
});

const mapDispatchToProps = {
	onTextChange,
	fetchConversationMessages,
	attachImage,
	sendMessage,
	deleteMessage,
	clearCurrentConversationReducer,
	clearUploadedImage,
	recycleMessage,
	replyToMessage,
	removeReplyTo,
	fetchOtherUserInfo,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConversationScreen);
