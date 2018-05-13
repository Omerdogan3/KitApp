import React, { PropTypes } from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../Designs/CardOne';


const CardOne = ({ info, viewMovie }) => (
	<View>
        <Image source={{ uri: info.image_link }} style={styles.imageBackdrop} />
        <LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']} style={styles.linearGradient} />
        <View style={styles.cardContainer}>
            <Image source={{ uri: info.image_link }} style={styles.cardImage} />
            
            <View style={styles.cardDetails}>
            <Text style={styles.cardTitle} numberOfLines={2}>
					{info.title}
			</Text>
                
            <Text style={styles.cardDescription} numberOfLines={3}>
					{info.ISBN}
			</Text>
			
			<Text style={styles.cardDescription} numberOfLines={3}>
					{info.author_name}
            </Text>
            
            <Text style={styles.cardDescription} numberOfLines={3}>
					{info.publisher_name}
			</Text>
                
        </View>
        
    </View>
	</View>
);

export default CardOne;