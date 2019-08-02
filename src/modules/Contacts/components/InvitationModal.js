import React from 'react';
import PhoneInput from 'react-native-phone-input';

import { Text, View } from 'react-native';
import { Modal, Button } from '@ant-design/react-native';

const InvitationModal = ({
	onClose,
	visible,
	styles,
	onChangePhoneNumber,
	sendInvitation,
	loading,
	error,
}) => {
	return (
		<Modal
			transparent
			onClose={onClose}
			maskClosable
			visible={visible}
			closable
		>
			<View style={styles.modalBody}>
				<Text style={styles.modalText}>We'll send them a text message</Text>
				{error.error && (
					<Text style={styles.errorMessage}>{error.message}</Text>
				)}
				<PhoneInput
					textProps={{ placeholder: '123 456 789' }}
					initialCountry='null'
					style={!error.error ? styles.phoneInput : styles.phoneInputError}
					onChangePhoneNumber={onChangePhoneNumber}
				/>
			</View>
			<Button
				type='primary'
				onPress={sendInvitation}
				loading={loading && !error.error}
			>
				Send Invite
			</Button>
		</Modal>
	);
};

export default InvitationModal;
