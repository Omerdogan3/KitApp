import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Platform
} from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {Header,Icon,Input, Item,Button,Text} from 'native-base';
import {TouchableHighlight} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

const KEYS_TO_FILTERS = ['title', 'genre', 'ISBN'];

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
        <View searchBar rounded style={styles.searchInput}>
          <Item >
            <Input placeholder="Aramak istediginiz Kitap, tur, yazar ismi" 
                    onChangeText={(term) => { this.searchUpdated(term)}} 
            />
            <View>
              <TouchableHighlight>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}> 
                  Tara
                </Text>
              </TouchableHighlight>
            </View>
        </Item>

        
      </View>  

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
    paddingTop: 0,         // start below status bar
    justifyContent: 'flex-start',
    marginTop: Platform.OS === 'ios' ? 10 : 0,
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
  searchInput:{
    width: Dimensions.get('window').width
  }
});