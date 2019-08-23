import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { Provider, Toast, ActivityIndicator } from '@ant-design/react-native';
import {
	setPhoneNumber,
	sendInvitation,
	checkIfContactsAreRegistered,
	cleanReducer,
} from '../actions';
import { createConversation } from '../../Conversation/actions';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

import styles from './styles';
import ListItem from './ListItem';
import { ImageAssets } from '../../../config';
import InvitationModal from './InvitationModal';

class ContactsScreen extends Component {
	state = { visible: false };

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CONTACTS);

		if (status !== 'granted') {
			await Permissions.askAsync(Permissions.CONTACTS);
		} else {
			const { data } = await Contacts.getContactsAsync({
				fields: [Contacts.Fields.PhoneNumbers],
			});
			if (data.length > 0) {
				this.props.checkIfContactsAreRegistered(data);
			}
		}
	}
	openModal = () => {
		this.setState({ visible: true });
	};

	onClose = () => {
		this.setState({ visible: false });
	};

	componentWillReceiveProps(newProps) {
		if (newProps.Contacts.invite.sent) {
			this.setState({ visible: false });
			Toast.success('Message Sent', 1);
		}
		if (newProps.Conversation.creation.redirectToId) {
			this.props.navigation.replace('Conversation', {
				conversationId: newProps.Conversation.creation.redirectToId,
			});
		}
	}

	componentWillUnmount() {
		this.props.cleanReducer();
	}

	render() {
		const { visible } = this.state;
		const {
			setPhoneNumber,
			sendInvitation,
			Contacts,
			navigation,
			createConversation,
		} = this.props;
		return (
			<KeyboardAvoidingView behavior='padding' enabled>
				<View style={styles.container}>
					<Provider>
						<ListItem
							imageSource={ImageAssets.PLUS_ICON}
							text={'Invite a person'}
							isLocalImage={true}
							onPress={this.openModal}
						/>

						{Contacts.contacts.list.map(contact => (
							<ListItem
								key={contact}
								text={contact}
								onPress={() => createConversation(contact)}
							/>
						))}

						{Contacts.contacts.loading && <ActivityIndicator />}

						{Contacts.contacts.error && (
							<View style={styles.networkErrorWrapper}>
								<Image
									style={styles.networkErrorImage}
									source={ImageAssets.NETWORK_ERROR}
								/>
								<Text style={styles.networkErrorText}>
									Something went wrong...
								</Text>
							</View>
						)}

						<InvitationModal
							onClose={this.onClose}
							visible={visible}
							onChangePhoneNumber={phoneNumber =>
								setPhoneNumber(phoneNumber)
							}
							styles={styles}
							error={Contacts.invite.error}
							loading={Contacts.invite.loading}
							sendInvitation={
								Contacts.invite.phoneNumber && sendInvitation
							}
						/>
					</Provider>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	Contacts: state.Contacts,
	Conversation: state.Conversation,
});

const mapDispatchToProps = {
	setPhoneNumber,
	sendInvitation,
	checkIfContactsAreRegistered,
	createConversation,
	cleanReducer,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContactsScreen);
