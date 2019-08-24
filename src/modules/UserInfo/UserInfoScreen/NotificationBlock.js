import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from '@ant-design/react-native';
import styles from './styles';
import { Colors } from '../../../config';

const NotificationBlock = ({ toggleNotifications, notificationsState }) => {
	return (
		<View style={styles.notificationBlockContainer}>
			<Text style={styles.aboutLargeText}>Chat Notifications</Text>
			<View style={styles.toggleContainer}>
				<Text style={styles.aboutLargeText}>On</Text>
				<Switch
					color={Colors.DARK_BLUE}
					onChange={toggleNotifications}
					checked={notificationsState}
				/>
			</View>
		</View>
	);
};

export default NotificationBlock;
