import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	Image,
	KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import PhoneInput from 'react-native-phone-input';
import { Button } from '@ant-design/react-native';
import { connect } from 'react-redux';
import {
	handlePhoneChange,
	login,
	handleSecurityCodeChange,
	signUp,
	clearLoginReducer,
} from '../actions';
import { ImageAssets } from '../../../config';

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
			authError,
			code,
		} = this.props;
		return (
			<View style={styles.container}>
				<KeyboardAvoidingView behavior='padding' enabled>
					{!codeSent && (
						<View style={styles.stepWrapper}>
							<Image
								style={styles.image}
								source={
									!authError
										? ImageAssets.MOBILE_NUMBER_ICON
										: ImageAssets.ERROR_404_ICON
								}
							/>
							<Text style={styles.header}>
								{!authError
									? 'Insert your mobile number to get started!'
									: 'Oops... something went wrong. Try again'}
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
								disabled={!phoneNumber || (loading && !authError)}
								onPress={signUp}
								loading={loading && !authError}
							>
								Submit
							</Button>
						</View>
					)}
					{codeSent && !currentUser && (
						<View style={styles.stepWrapper}>
							<Image
								style={styles.image}
								source={ImageAssets.PINCODE_ICON}
							/>
							<Text style={styles.header}>
								You'll receive a text message with a code, insert it
								below
							</Text>
							<Text>{code}</Text>
							<TextInput
								style={
									!authError ? styles.codeInput : styles.codeInputError
								}
								type='number'
								multiline={false}
								maxLength={5}
								keyboardType='number-pad'
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
							<Text style={styles.didntReceiveText}>
								Didn't receive one yet?
								<Text style={styles.clickHere} onPress={signUp}>
									Click here
								</Text>
								.
							</Text>
						</View>
					)}
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	phoneNumber: state.login.phoneNumber,
	securityCode: state.login.securityCode,
	authError: state.login.authError,
	loading: state.login.loading,
	codeSent: state.login.codeSent,
	currentUser: state.currentUser,
	code: state.login.code,
});

const mapDispatchToProps = {
	handlePhoneChange,
	handleSecurityCodeChange,
	signUp,
	login,
	clearLoginReducer,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen);
