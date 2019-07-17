import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from '../styling/HomeScreen.styles';

import { ActivityIndicator } from '@ant-design/react-native';
import { connect } from 'react-redux';

import { fetchMyConversations } from '../redux/actions/conversations';
import { localStorageJwtKey } from '../helpers/constants';

class HomeScreen extends Component {
	componentDidMount() {
		this.props.fetchMyConversations();
	}

	render() {
		const { myConversations } = this.props;
		return (
			<View style={styles.container}>
				{myConversations.fetching && <ActivityIndicator size='large' />}
				{!myConversations.fetching &&
					myConversations.conversations.length > 0 &&
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
