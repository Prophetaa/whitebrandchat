import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { ImageAssets } from '../../../config';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Navbar = ({ statusBarHeight, onLeftPress, onRightPress }) => {
	return (
		<View style={styles(statusBarHeight).navbarContainer}>
			<TouchableWithoutFeedback
				onPress={onLeftPress}
				style={styles().navbarButtonSection}
			>
				<Image
					source={ImageAssets.PLUS_ICON_2}
					style={styles().navbarIcon}
				/>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback
				onPress={onRightPress}
				style={styles().navbarButtonSection}
			>
				<Image
					source={ImageAssets.LOGOUT_ICON}
					style={styles().navbarIcon}
				/>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default Navbar;
