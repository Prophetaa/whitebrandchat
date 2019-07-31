import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { Provider, Toast, ActivityIndicator } from '@ant-design/react-native';
import {
	setPhoneNumber,
	sendInvitation,
	checkIfContactsAreRegistered,
<<<<<<< HEAD
	cleanReducer,
} from '../actions';
import { createConversation } from '../../Conversation/actions';
=======
} from '../actions';
>>>>>>> master

import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

import styles from './styles';
import ListItem from './ListItem';
import { ImageAssets } from '../../../config';
import InvitationModal from './InvitationModal';
import { FlatList } from 'react-native-gesture-handler';

class ContactsScreen extends Component {
	state = { visible: false };

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CONTACTS);

		if (status !== 'granted') {
<<<<<<< HEAD
			await Permissions.askAsync(Permissions.CONTACTS);
=======
			console.log('Hey! You heve not enabled selected permissions');
>>>>>>> master
		} else {
			const { data } = await Contacts.getContactsAsync({
				fields: [Contacts.Fields.PhoneNumbers],
			});
			if (data.length > 0) {
				this.props.checkIfContactsAreRegistered(data);
			}
		}
	}
<<<<<<< HEAD

=======
>>>>>>> master
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
			console.log(newProps.Conversation.creation.redirectToId);
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
<<<<<<< HEAD
		const {
			setPhoneNumber,
			sendInvitation,
			Contacts,
			navigation,
			createConversation,
		} = this.props;
=======
		const { setPhoneNumber, sendInvitation, Contacts } = this.props;
>>>>>>> master
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
<<<<<<< HEAD
							<ListItem
								key={contact}
								text={contact}
								onPress={() => createConversation(contact)}
							/>
=======
							<ListItem key={contact} text={contact} />
>>>>>>> master
						))}

						{Contacts.contacts.loading && <ActivityIndicator />}

						{/* TODO: Move comon empty list or error message styling and components to common folder */}
						{Contacts.contacts.error && (
							<View style={styles.networkErrorWrapper}>
								<Image
									style={styles.networkErrorImage}
<<<<<<< HEAD
									source={ImageAssets.NETWORK_ERROR}
=======
									source={Config.ImageAssets.NETWORK_ERROR}
>>>>>>> master
								/>
								<Text style={styles.networkErrorText}>
									Something went wrong...
								</Text>
							</View>
						)}
<<<<<<< HEAD

=======
             
>>>>>>> master
						<InvitationModal
							onClose={this.onClose}
							visible={visible}
							onChangePhoneNumber={phoneNumber =>
								setPhoneNumber(phoneNumber)
							}
							styles={styles}
							error={Contacts.invite.error}
							loading={Contacts.invite.loading}
<<<<<<< HEAD
							image={ImageAssets.TEXT_MESSAGE_ICON}
							sendInvitation={
								Contacts.invite.phoneNumber && sendInvitation
							}
=======
							image={Config.ImageAssets.TEXT_MESSAGE_ICON}
							sendInvitation={
								Contacts.invite.phoneNumber && sendInvitation
							}

>>>>>>> master
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
<<<<<<< HEAD
	Conversation: state.Conversation,
=======
>>>>>>> master
});

const mapDispatchToProps = {
	setPhoneNumber,
	sendInvitation,
	checkIfContactsAreRegistered,
<<<<<<< HEAD
	createConversation,
	cleanReducer,
=======
>>>>>>> master
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContactsScreen);
