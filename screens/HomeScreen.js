import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styling/HomeScreen.styles';

import { ActivityIndicator, Button } from '@ant-design/react-native';
import { connect } from 'react-redux';

import { fetchMyConversations } from '../redux/actions/conversations';
import { localStorageJwtKey } from '../helpers/constants';

class HomeScreen extends Component {
	componentDidMount() {
		this.props.fetchMyConversations();
	}

	render() {
		const { myConversations, navigation } = this.props;
		const isThereConversations = myConversations.conversations.length > 0;
		return (
			<View style={styles(isThereConversations).container}>
				{myConversations.fetching && <ActivityIndicator size='large' />}
				{!myConversations.fetching && !isThereConversations && (
					<>
						<Image
							style={styles().noConversationsImage}
							source={require('../assets/no-messages.png')}
						/>
						<Text style={styles().noConversationsText}>
							You have no conversations
						</Text>
						<Button
							type='primary'
							onPress={() => navigation.navigate('Contacts')}
						>
							Start one
						</Button>
					</>
				)}
				{isThereConversations &&
					myConversations.map(conversation => (
						<Text> {conversation.id}</Text>
					))}
			</View>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	myConversations: state.myConversations,
});

const mapDispatchToProps = {
	fetchMyConversations,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen);
