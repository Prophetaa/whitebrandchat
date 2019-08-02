import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ImageAssets } from '../../../../config';
import moment from 'moment';

const Navbar = ({ statusBarHeight, onLeftPress, otherUserInfo }) => {
	const { lastSeen, avatar, phoneNumber, online } = otherUserInfo;
	return (
		<View style={styles(statusBarHeight).iosNavbarContainer}>
			<TouchableOpacity
				onPress={onLeftPress}
				style={styles().navbarButtonSection}
			>
				<Image
					source={ImageAssets.LEFT_CHEVRON}
					style={styles().backChevron}
				/>
				<Text style={styles().backChevronText}>Chats</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<View style={styles().navbarButtonSection}>
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
			<TouchableOpacity>
				<Image source={{ uri: avatar }} style={styles().iosAvatar} />
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
