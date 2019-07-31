import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import Bubble from '../Bubble/Bubble';
import { connect } from 'react-redux';

const ChatBubbleContainer = ({
	conversation,
	currentUserId,
	onBubblePress,
}) => {
	const scrollToIndex = index => {
		flatListRef.scrollToIndex({
			animated: true,
			index,
		});
	};

	const scrollToEnd = () => {
		setTimeout(() => flatListRef.scrollToEnd(), 900);
	};

	return (
		<View style={styles.chatBubblesContainer}>
			{conversation.messages.length > 0 && (
				<FlatList
					ref={ref => {
						flatListRef = ref;
					}}
					data={conversation.messages}
					keyExtractor={item => `${item.id}`}
					renderItem={({ item, index }) => (
						<Bubble
							replyToMessage={
								item.replyTo
									? conversation.messages[item.replyTo]
									: null
							}
							messageIndex={index}
							message={item}
							id={currentUserId}
							onBubblePress={onBubblePress}
							scrollToMessage={scrollToIndex}
						/>
					)}
					onContentSizeChange={scrollToEnd}
				/>
			)}
		</View>
	);
};

const mapStateToProps = state => ({
	conversation: state.Conversation.currentConversation,
	currentUserId: state.currentUser.id,
});

export default connect(
	mapStateToProps,
	null
)(ChatBubbleContainer);
