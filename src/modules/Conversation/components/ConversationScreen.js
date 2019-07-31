import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';

import { View } from 'react-native';
import {
	onTextChange,
	fetchConversationMessages,
	sendMessage,
	clearCurrentConversationReducer,
} from '../actions';

import TextArea from './TextArea';
import ChatBubbleContainer from './ChatBubbleContainer';

class ConversationScreen extends React.Component {
	componentWillMount() {
		const { navigation, fetchConversationMessages } = this.props;
		const conversationId = navigation.getParam('conversationId', 0);
		fetchConversationMessages(conversationId);
	}

	componentWillUnmount() {
		this.props.clearCurrentConversationReducer();
	}

	render() {
		const {
			onTextChange,
			Conversation,
			sendMessage,
			currentUser,
		} = this.props;
		return (
			<View style={styles.container}>
				<ChatBubbleContainer
					conversation={Conversation.currentConversation}
					currentUser={currentUser}
				/>
				<TextArea
					onTextChange={onTextChange}
					Conversation={Conversation}
					onSubmit={sendMessage}
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
	sendMessage,
	clearCurrentConversationReducer,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConversationScreen);
