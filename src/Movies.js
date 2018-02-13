import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Button,
  Platform
} from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['title', 'genre'];

export default class Movies extends Component {
  state = {
    popupIsOpen: false,
    searchTerm: ''
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  
  openMovie = (movie) => {
    this.setState({
      popupIsOpen: true,
      movie,	
    });
  }

  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
    });
  }
  render() {
    const filteredMovies = movies.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <View style={styles.container}>
        <SearchInput 
            onChangeText={(term) => { this.searchUpdated(term) }} 
            style={styles.searchInput}
            placeholder="Aramak istediginiz kitap, tur, yazar ismi"
        />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
		  // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {filteredMovies.map((movie, index) => <MoviePoster
            movie={movie}
            onOpen={this.openMovie}
            key={index}
          />)}
        </ScrollView>
        <MoviePopup
          movie={this.state.movie}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeMovie}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,         // start below status bar
    justifyContent: 'flex-start',
    marginTop: Platform.OS === 'ios' ? 10 : 0,
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
  searchInput:{
    borderColor: '#CCC',
    borderWidth: 1,
    width: Dimensions.get('window').width,
    marginBottom: 5,
    
  }
});