import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { defaultStyles } from './styles';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 3, rows = 3;

export default class SepetUrun extends Component {
  render() {
    const { movie, movie: { title, genre, poster }, onOpen } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
        <View style={styles.urun}>
            <View style={styles.imageContainer}>
            <Image source={{ uri: poster }} style={styles.image} />
            </View>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Text style={styles.genre} numberOfLines={1}>{genre}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:5
  },
  urun:{
    flexDirection: 'row'
  },
  imageContainer: {
    width: 30,                          // take up all available space
    height: 50
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  },
  genre: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
});