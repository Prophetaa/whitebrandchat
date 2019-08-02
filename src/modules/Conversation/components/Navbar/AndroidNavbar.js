import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ImageAssets } from '../../../../config';
import moment from 'moment';

const AndroidNavbar = ({ statusBarHeight, onLeftPress, otherUserInfo }) => {
	const { lastSeen, avatar, phoneNumber, online } = otherUserInfo;
	return (
		<View style={styles(statusBarHeight).androidNavbarContainer}>
			<TouchableOpacity
				onPress={onLeftPress}
				style={styles().navbarButtonSection}
			>
				<Image source={ImageAssets.LEFT_ARROW} style={styles().backArrow} />
			</TouchableOpacity>
			<TouchableOpacity>
				<View style={styles().navbarButtonSection}>
					<Image
						source={{ uri: avatar }}
						style={styles().otherUserAvatar}
					/>
					<View>
						<Text style={styles().whiteText}>{phoneNumber}</Text>
						<View>
							{online ? (
								<View style={styles().userStatus}>
									<Image
										style={styles().onlineIcon}
										source={ImageAssets.ONLINE_ICON}
									/>
									<Text style={styles().whiteText}>Online now</Text>
								</View>
							) : (
								<Text style={styles().whiteText}>
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
)(AndroidNavbar);
