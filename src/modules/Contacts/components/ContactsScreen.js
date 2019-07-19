import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { Provider, Toast } from '@ant-design/react-native';
import { setPhoneNumber, sendInvitation } from '../actions';

import styles from './styles';
import ListItem from './ListItem';
import Config from '../../../config';
import InvitationModal from './InvitationModal';

class ContactsScreen extends Component {
	state = { visible: false };

	openModal = () => {
		this.setState({ visible: true });
	};

	onClose = () => {
		this.setState({ visible: false });
	};

	componentWillReceiveProps(newProps) {
		if (newProps.invite.sent) {
			this.setState({ visible: false });
			Toast.success('Message Sent', 1);
		}
	}

	render() {
		const { visible } = this.state;
		const { setPhoneNumber, sendInvitation, invite } = this.props;

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
						<InvitationModal
							onClose={this.onClose}
							visible={visible}
							onChangePhoneNumber={phoneNumber =>
								setPhoneNumber(phoneNumber)
							}
							styles={styles}
							error={invite.error}
							loading={invite.loading}
							image={Config.ImageAssets.TEXT_MESSAGE_ICON}
							sendInvitation={invite.phoneNumber && sendInvitation}
						/>
					</Provider>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	invite: state.Contacts.invite,
});

const mapDispatchToProps = {
	setPhoneNumber,
	sendInvitation,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContactsScreen);
