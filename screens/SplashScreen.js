import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { rehidrateJWT } from '../redux/actions/login';
import styles from '../styling/Splashscreen.styles';

class SplashScreen extends Component {
	async componentDidMount() {
		await this.props.rehidrateJWT();
	}
	componentWillUpdate(newProps) {
		const { currentUser, rehidratingJwt } = newProps;
		if (!currentUser && !rehidratingJwt) {
			this.props.navigation.replace('Login');
		} else if (currentUser && !rehidratingJwt) {
			this.props.navigation.replace('Home');
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../assets/chat.png')}
				/>
				<Text style={styles.text}>White Brand Chat</Text>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	rehidratingJwt: state.login.rehidratingJwt,
});

const mapDispatchToProps = {
	rehidrateJWT,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SplashScreen);
