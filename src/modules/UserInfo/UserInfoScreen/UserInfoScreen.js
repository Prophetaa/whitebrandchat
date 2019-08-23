import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import moment from 'moment';
import { connect } from 'react-redux';

const UserInfoScreen = ({ navigation, media }) => {
	const userInfo = navigation.getParam('otherUserInfo', 0);
	const { avatar, phoneNumber, nickname, lastSeen } = userInfo;
	console.log(media);
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

			<View style={styles.mediaContainer}>
				{media.length > 0 &&
					media.map(
						(image, i) =>
							i <= 3 && (
								<Image
									key={i}
									style={styles.mediaImage}
									source={{ uri: image }}
								/>
							)
					)}
				{media.length > 3 && (
					<View style={styles.viewAllMediaContainer}>
						<Text style={styles.viewAllMediaText}>View All</Text>
					</View>
				)}
			</View>
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
