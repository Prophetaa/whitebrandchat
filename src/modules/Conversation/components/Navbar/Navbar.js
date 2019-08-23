import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from '@ant-design/react-native';
import styles from './styles';
import { ImageAssets } from '../../../../config';
import moment from 'moment';

const Navbar = ({ statusBarHeight, onLeftPress, otherUserInfo }) => {
	const { lastSeen, avatar, phoneNumber, online } = otherUserInfo;
	return (
		<View style={styles(statusBarHeight).navbarContainer}>
			<TouchableOpacity
				onPress={onLeftPress}
				style={styles().navbarButtonSection}
			>
				<Icon name='arrow-left' size='md' color='black' />
			</TouchableOpacity>
			<TouchableOpacity>
				<View style={styles().navbarButtonSection}>
					<Image
						source={{ uri: avatar }}
						style={styles().otherUserAvatar}
					/>
					<View>
						<Text>{phoneNumber}</Text>
						<View>
							{online ? (
								<View style={styles().userStatus}>
									<Image
										style={styles().onlineIcon}
										source={ImageAssets.ONLINE_ICON}
									/>
									<Text>Online now</Text>
								</View>
							) : (
								<Text>
									{lastSeen &&
										`last seen ${moment(lastSeen).fromNow()}`}
								</Text>
							)}
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const mapStateToProps = state => ({
	otherUserInfo: state.Conversation.currentConversation.otherUserInfo,
});

export default connect(
	mapStateToProps,
	null
)(Navbar);
