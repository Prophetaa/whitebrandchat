import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { Provider, Toast, ActivityIndicator } from '@ant-design/react-native';
import {
	setPhoneNumber,
	sendInvitation,
	checkIfContactsAreRegistered,
} from '../actions';

import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

import styles from './styles';
import ListItem from './ListItem';
import Config from '../../../config';
import InvitationModal from './InvitationModal';
import { FlatList } from 'react-native-gesture-handler';

class ContactsScreen extends Component {
	state = { visible: false };

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CONTACTS);

		if (status !== 'granted') {
			console.log('Hey! You heve not enabled selected permissions');
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
	}

	render() {
		const { visible } = this.state;
		const { setPhoneNumber, sendInvitation, Contacts } = this.props;
		return (
			<KeyboardAvoidingView behavior='padding' enabled>
				<View style={styles.container}>
					<Provider>
						<ListItem
							imageSource={Config.ImageAssets.PLUS_ICON}
							text={'Invite a person'}
							isLocalImage={true}
							onPress={this.openModal}
						/>

						{Contacts.contacts.list.map(contact => (
							<ListItem key={contact} text={contact} />
						))}

						{Contacts.contacts.loading && <ActivityIndicator />}

						{/* TODO: Move comon empty list or error message styling and components to common folder */}
						{Contacts.contacts.error && (
							<View style={styles.networkErrorWrapper}>
								<Image
									style={styles.networkErrorImage}
									source={Config.ImageAssets.NETWORK_ERROR}
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
							image={Config.ImageAssets.TEXT_MESSAGE_ICON}
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
});

const mapDispatchToProps = {
	setPhoneNumber,
	sendInvitation,
	checkIfContactsAreRegistered,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContactsScreen);
