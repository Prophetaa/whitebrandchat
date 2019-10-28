import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const registerForPushNotificationsAsync = async () => {
	const { status: existingStatus } = await Permissions.getAsync(
		Permissions.NOTIFICATIONS
	);
	let finalStatus = existingStatus;

	if (existingStatus !== 'granted') {
		const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		finalStatus = status;
	}

	if (finalStatus !== 'granted') {
		return;
	}

	// Get the token that uniquely identifies this device
	const token = await Notifications.getExpoPushTokenAsync();
	console.log('TOKEN IS', token);

	return token;
};

export default registerForPushNotificationsAsync;
