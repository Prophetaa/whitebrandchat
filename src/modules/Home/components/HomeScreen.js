import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { ImageAssets } from '../../../config';
import { ActivityIndicator, Button } from '@ant-design/react-native';
import { connect } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { fetchMyConversations } from '../actions';
import ListItem from '../../Contacts/components/ListItem';

import Navbar from './Navbar';
import { ScrollView } from 'react-native-gesture-handler';
import { logout } from '../../Auth/actions';

class HomeScreen extends Component {
	state = { statusBarHeight: 0 };

	componentDidMount() {
		this.setState({ statusBarHeight: getStatusBarHeight() });
		this.props.fetchMyConversations();
	}

	navigateToContacts = () => {
		this.props.navigation.navigate('Contacts');
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
		const { myConversations, navigation, currentUser, logout } = this.props;
		const isThereConversations = myConversations.conversations.length > 0;

		return (
			<View style={styles().container}>
				<Navbar
					statusBarHeight={this.state.statusBarHeight}
					onLeftPress={() => this.props.navigation.navigate('Contacts')}
					onRightPress={logout}
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
						<Button
							type='primary'
							style={{ marginTop: 15 }}
							onPress={logout}
						>
							Start one
						</Button>
					</View>
				)}
				<Text />
				{currentUser && isThereConversations && (
					<ScrollView>
						{myConversations.conversations.map(conversation => {
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
									onPress={() =>
										navigation.navigate('Conversation', {
											conversationId: id,
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
	currentUser: state.currentUser,
	myConversations: state.myConversations,
	Conversation: state.Conversation,
});

const mapDispatchToProps = {
	fetchMyConversations,
	logout,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen);
