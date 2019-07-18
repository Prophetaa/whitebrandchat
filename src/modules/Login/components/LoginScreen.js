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
} from '../actions';
import Config from '../../../config';

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
			signupError,
		} = this.props;
		return (
			<View style={styles.container}>
				<KeyboardAvoidingView behavior='padding' enabled>
					{!codeSent && (
						<View style={styles.stepWrapper}>
							<Image
								style={styles.image}
								source={
									!signupError
										? Config.ImageAssets.MOBILE_NUMBER_ICON
										: Config.ImageAssets.ERROR_404_ICON
								}
							/>
							<Text style={styles.header}>
								{!signupError
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
								disabled={!phoneNumber || (loading && !signupError)}
								onPress={signUp}
								loading={loading && !signupError}
							>
								Submit
							</Button>
						</View>
					)}
					{codeSent && !currentUser && (
						<View style={styles.stepWrapper}>
							<Image
								style={styles.image}
								source={Config.ImageAssets.PINCODE_ICON}
							/>
							<Text style={styles.header}>
								You'll receive a text message with a code, insert it
								below
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
	signupError: state.login.signupError,
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
