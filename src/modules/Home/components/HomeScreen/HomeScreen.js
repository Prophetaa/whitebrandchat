import React, { Component } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import styles from './styles';
import { ImageAssets } from '../../../../config';
import { ActivityIndicator, Modal } from '@ant-design/react-native';
import { connect } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { setCommonValues } from '../../../Common/actions';
import { fetchMyConversations, deleteConversation } from '../../actions';
import ListItem from '../../../Contacts/components/ListItem';

import Navbar from '../Navbar/Navbar';
import { ScrollView } from 'react-native-gesture-handler';
import { logout } from '../../../Auth/actions';
import CreateConvoButton from '../CreateConvoButton/CreateConvoButton';

class HomeScreen extends Component {
	componentDidMount() {
		this.props.setCommonValues(getStatusBarHeight(), Platform);
		this.props.fetchMyConversations();
	}

	navigateToContacts = () => {
		this.props.navigation.navigate('Contacts');
	};

	toggleDeleteModal = conversationId => {
		Modal.operation([
			{
				text: 'Delete Conversation',
				onPress: () => this.props.deleteConversation(conversationId),
			},
		]);
	};

	componentWillReceiveProps(newProps) {
		if (newProps.Conversation.creation.redirectToId) {
			this.props.fetchMyConversations();
		}
		if (!newProps.currentUser) {
			this.props.navigation.replace('Login');
		}
	}

	render() {
		const {
			myConversations,
			statusBarHeight,
			navigation,
			currentUser,
			logout,
		} = this.props;
		const isThereConversations = myConversations.conversations.length > 0;

		return (
			<View style={styles().container}>
				<Navbar onRightPress={logout} />
				<CreateConvoButton
					goToContacts={() => this.props.navigation.navigate('Contacts')}
				/>
				{myConversations.fetching && <ActivityIndicator size='large' />}
				{!myConversations.fetching && !isThereConversations > 0 && (
					<View style={styles().noConversationContainer}>
						<Image
							style={styles().noConversationsImage}
							source={ImageAssets.EMPTY_INBOX_ICON}
						/>
						<Text style={styles().noConversationsText}>
							You have no conversations
						</Text>
					</View>
				)}
				{currentUser && isThereConversations && (
					<ScrollView
						style={styles(statusBarHeight).conversationsListContainer}
					>
						{myConversations.conversations.map((conversation, index) => {
							const {
								id,
								userOneAvatar,
								userOneNumber,
								userOneId,
								userTwoAvatar,
								userTwoNumber,
							} = conversation;
							const isUserOneCurrentUser = userOneId === currentUser.id;
							return (
								<ListItem
									onLongPress={this.toggleDeleteModal}
									onPress={() =>
										navigation.navigate('Conversation', {
											conversationId: id,
											conversationIndex: index,
										})
									}
									key={id}
									imageSource={{
										uri: isUserOneCurrentUser
											? userTwoAvatar
											: userOneAvatar,
									}}
									text={
										isUserOneCurrentUser
											? userTwoNumber
											: userOneNumber
									}
								/>
							);
						})}
					</ScrollView>
				)}
			</View>
		);
	}
}

const mapStateToProps = state => ({
	statusBarHeight: state.Common.statusBarHeight,
	currentUser: state.currentUser,
	myConversations: state.myConversations,
	Conversation: state.Conversation,
});

const mapDispatchToProps = {
	fetchMyConversations,
	deleteConversation,
	setCommonValues,
	logout,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen);
