import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

import { rehidrateJWT } from '../../Auth/actions';
import styles from './styles';
import { ImageAssets } from '../../../config';

class SplashScreen extends Component {
	async componentDidMount() {
		this.props.rehidrateJWT();
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
				<Image style={styles.image} source={ImageAssets.WHITE_BRAND_ICON} />
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
