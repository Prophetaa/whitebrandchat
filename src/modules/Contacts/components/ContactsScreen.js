import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { Modal, Provider, Button } from '@ant-design/react-native';

import PhoneInput from 'react-native-phone-input';

import styles from './styles';
import ListItem from './ListItem';
import Config from '../../../config';

class ContactsScreen extends Component {
	async componentDidMount() {}
	state = { phoneNumber: null };

	openModal = () => {
		this.setState({ visible: true });
	};

	onClose = () => {
		this.setState({ visible: false });
	};

	sendInvitation = () => {
		if (!this.state.phoneNumber) {
			this.setState({ error: true });
		}
	};
	render() {
		// const { error, phoneNumber } = this.state;
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
						<Modal
							transparent
							onClose={this.onClose}
							maskClosable
							visible={this.state.visible}
							closable
						>
							<View style={styles.modalBody}>
								<Image
									style={styles.modalImage}
									source={Config.ImageAssets.TEXT_MESSAGE_ICON}
								/>
								<Text style={styles.modalText}>
									We'll send them a text message
								</Text>
								<PhoneInput
									ref='phone'
									textProps={{ placeholder: '123 456 789' }}
									initialCountry='null'
									style={styles.phoneInput}
									onChangePhoneNumber={phoneNumber =>
										this.setState({ phoneNumber })
									}
								/>
							</View>
							<Button type='primary' onPress={this.sendInvitation}>
								Send Invite
							</Button>
						</Modal>
					</Provider>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContactsScreen);