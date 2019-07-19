import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styling/LoginScreen.styles';
import PhoneInput from 'react-native-phone-input';
import { Button } from '@ant-design/react-native';
import { connect } from 'react-redux';
import {
	handlePhoneChange,
	login,
	handleSecurityCodeChange,
} from '../redux/actions/login';

import { signUp } from '../redux/actions/user';

class LoginScreen extends Component {
	componentWillUpdate(newProps) {
		if (newProps.currentUser) {
			this.props.navigation.replace('Home');
		}
	}

	render() {
		const {
			handlePhoneChange,
			loading,
			phoneNumber,
			signUp,
			codeSent,
			securityCode,
			handleSecurityCodeChange,
			login,
			currentUser,
		} = this.props;
		return (
			<View style={styles.container}>
				{!codeSent && (
					<View style={{ width: '100%' }}>
						<Text style={styles.header}>
							Write your mobile number to get started!
						</Text>
						<PhoneInput
							ref='phone'
							textProps={{ placeholder: '+123 456 789 000' }}
							initialCountry='null'
							style={styles.phoneInput}
							onChangePhoneNumber={phoneNumber =>
								handlePhoneChange(phoneNumber)
							}
						/>
						<Button
							type='primary'
							style={{ marginTop: 20 }}
							disabled={!phoneNumber || loading}
							onPress={signUp}
							loading={loading}
						>
							Submit
						</Button>
					</View>
				)}
				{codeSent && !currentUser && (
					<View style={{ width: '100%' }}>
						<Text style={styles.header}>
							We've sent you a code, enter it below
						</Text>
						<TextInput
							style={styles.numberInput}
							type='number'
							multiline={false}
							maxLength={5}
							value={securityCode}
							onChangeText={securityCode =>
								handleSecurityCodeChange(securityCode)
							}
						/>
						<Button
							type='primary'
							style={{ marginTop: 20 }}
							disabled={!securityCode || loading}
							onPress={login}
							loading={loading}
						>
							Submit
						</Button>
					</View>
				)}
			</View>
		);
	}
}

const mapStateToProps = state => ({
	phoneNumber: state.login.phoneNumber,
	securityCode: state.login.securityCode,
	loading: state.login.loading,
	codeSent: state.login.codeSent,
	currentUser: state.currentUser,
});

const mapDispatchToProps = {
	handlePhoneChange,
	handleSecurityCodeChange,
	signUp,
	login,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen);
