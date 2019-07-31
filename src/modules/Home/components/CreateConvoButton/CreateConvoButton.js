import React from 'react';
import { View } from 'react-native';
import { Icon } from '@ant-design/react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateConvoButton = ({ goToContacts }) => {
	return (
		<View style={styles.newConvoButton}>
			<TouchableOpacity
				style={styles.convoButtonBody}
				onPress={goToContacts}
			>
				<Icon name='plus' size='md' color='white' />
			</TouchableOpacity>
		</View>
	);
};

export default CreateConvoButton;
