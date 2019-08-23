import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ImageAssets } from '../../../../config';

const Navbar = ({ onRightPress, Common }) => {
	const { statusBarHeight, platform } = Common;
	const isPlatformIos = platform === 'ios';
	return (
		<View
			style={
				isPlatformIos
					? styles(statusBarHeight).iosNavContainer
					: styles(statusBarHeight).androidNavContainer
			}
		>
			<TouchableOpacity />
			<Text
				style={isPlatformIos ? styles().iosHeader : styles().androidHeader}
			>
				Conversations
			</Text>
			<TouchableOpacity
				onPress={onRightPress}
				style={styles().navbarButtonSection}
			>
				{isPlatformIos && <Image source={ImageAssets.IOS_MENU_ICON} />}
			</TouchableOpacity>
		</View>
	);
};

const mapStateToProps = state => ({
	Common: state.Common,
});

export default connect(
	mapStateToProps,
	null
)(Navbar);
