import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const MediaBlock = ({ media }) => {
	return (
		<View style={styles.mediaContainer}>
			<View style={styles.mediaHeaderContainer}>
				<Text style={styles.mediaHeaderText}>Media</Text>
				<Text style={styles.mediaHeaderText}>{media[0]}</Text>
			</View>
			<View style={styles.mediaImagesContainer}>
				{media.length > 0 &&
					media[1].map(
						(image, i) =>
							i <= 3 && (
								<Image
									key={i}
									style={styles.mediaImage}
									source={{ uri: image }}
								/>
							)
					)}
				{media[0] > 3 && (
					<View style={styles.viewAllMediaContainer}>
						<Text style={styles.viewAllMediaText}>View All</Text>
					</View>
				)}
			</View>
		</View>
	);
};

export default MediaBlock;
