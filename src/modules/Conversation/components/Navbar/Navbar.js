import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ImageAssets } from '../../../../config';
import moment from 'moment';

const Navbar = ({
	statusBarHeight,
	onLeftPress,
	otherUserInfo,
	platform,
	onUserPress,
}) => {
	const { lastSeen, avatar, phoneNumber, online } = otherUserInfo;
	const isPlatformIos = platform === 'ios';
	return (
		<View
			style={
				isPlatformIos
					? styles(statusBarHeight).iosNavbarContainer
					: styles(statusBarHeight).androidNavbarContainer
			}
		>
			<TouchableOpacity
				onPress={onLeftPress}
				style={styles().navbarButtonSection}
			>
				{isPlatformIos ? (
					<Image
						source={ImageAssets.LEFT_CHEVRON}
						style={styles().backChevron}
					/>
				) : (
					<Image
						source={ImageAssets.LEFT_ARROW}
						style={styles().backArrow}
					/>
				)}
				{isPlatformIos && (
					<Text style={styles().backChevronText}>Chats</Text>
				)}
			</TouchableOpacity>
			<TouchableOpacity onPress={onUserPress}>
				<View style={styles().navbarButtonSection}>
					{!isPlatformIos && (
						<Image
							source={{ uri: avatar }}
							style={styles().otherUserAvatar}
						/>
					)}
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
			{isPlatformIos && (
				<TouchableOpacity onPress={onUserPress}>
					<Image source={{ uri: avatar }} style={styles().iosAvatar} />
				</TouchableOpacity>
			)}
		</View>
	);
};

const mapStateToProps = state => ({
	platform: state.Common.platform,
	otherUserInfo: state.Conversation.currentConversation.otherUserInfo,
});

export default connect(
	mapStateToProps,
	null
)(Navbar);
