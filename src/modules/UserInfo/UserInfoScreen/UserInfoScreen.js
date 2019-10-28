import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import moment from 'moment';
import { connect } from 'react-redux';
import AboutBlock from './AboutBlock';
import MediaBlock from './MediaBlock';
import NotificationBlock from './NotificationBlock';

const UserInfoScreen = ({ navigation, media }) => {
	const userInfo = navigation.getParam('otherUserInfo', 0);
	const { avatar, phoneNumber, nickname, lastSeen, description } = userInfo;
	const [notificationsState, toggleNotifications] = useState(true);
	return (
		<View>
			<View style={styles.userImageContainer}>
				<Image style={styles.userImage} source={{ uri: avatar }} />
				<View style={styles.userInfoContainer}>
					<Text style={styles.userName}>
						{nickname ? nickname : phoneNumber}
					</Text>
					<Text style={styles.userStatus}>
						{lastSeen
							? `last seen ${moment(lastSeen).fromNow()}`
							: 'Online now'}
					</Text>
				</View>
			</View>
			<View style={styles.containerPadding}>
				<AboutBlock description={description} phoneNumber={phoneNumber} />
				<NotificationBlock
					notificationsState={notificationsState}
					toggleNotifications={() =>
						toggleNotifications(!notificationsState)
					}
				/>
			</View>
			<MediaBlock media={media} />
		</View>
	);
};

const mapStateToProps = state => ({
	media: state.Conversation.currentConversation.media,
});

export default connect(
	mapStateToProps,
	null
)(UserInfoScreen);
